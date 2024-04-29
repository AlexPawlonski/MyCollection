"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  AddIcon,
  Button,
  CancelIcon,
  Container,
  Header,
  IconContainer,
  Title,
} from "./css";
import { faCheck, faPlus } from "@fortawesome/free-solid-svg-icons";
import { useContext } from "react";
import { PopUpContext } from "@/context/popUpContext";
import { useForm } from "react-hook-form";
import { InputText } from "@/components/form";
import { IForm } from "@/interface/Iform";
import { createCollection } from "./action";

export default function CollectionForm() {
  const { setIsActive, setPopUpType } = useContext(PopUpContext);

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<IForm>();

  const submitForm = async (formData: IForm) => {
    const responce = await createCollection(formData);
    if (responce.isSuccess) {
      setIsActive(false);
      setPopUpType(null);
    }
  };

  return (
    <Container>
      <form onSubmit={handleSubmit(submitForm)}>
        <Header>
          <Title>Nouvelle Collection</Title>
          <IconContainer>
            <Button type="submit">
              <FontAwesomeIcon icon={faCheck} className={AddIcon} />
            </Button>
            <FontAwesomeIcon
              icon={faPlus}
              className={CancelIcon}
              onClick={() => {
                setIsActive(false);
                setPopUpType(null);
              }}
            />
          </IconContainer>
        </Header>
        <InputText
          label="Titre"
          error={errors.name}
          register={register}
          required
          errorMessage="Merci de renseigner un titre !"
        />
      </form>
    </Container>
  );
}
