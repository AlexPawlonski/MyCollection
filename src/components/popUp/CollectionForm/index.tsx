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
import { createCollection, updateCollection } from "./action";

interface Props {
  collection?: {
    id: string;
    name: string;
    createdAt: Date;
    updatedAt: Date;
    accountId: string | null;
  };
}

export default function CollectionForm({ collection }: Props) {
  const { setPopUpStatus } = useContext(PopUpContext);

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<IForm>();

  const submitForm = async (formData: IForm) => {
    if (collection) {
      const responce = await updateCollection(formData, collection.id);
      if (responce.isSuccess) {
        setPopUpStatus(null);
      }
    } else {
      const responce = await createCollection(formData);
      if (responce.isSuccess) {
        setPopUpStatus(null);
      }
    }
  };

  return (
    <Container>
      <form onSubmit={handleSubmit(submitForm)}>
        <Header>
          <Title>
            {collection ? "Modifier la collection" : "Nouvelle Collection"}
          </Title>
          <IconContainer>
            <Button type="submit">
              <FontAwesomeIcon icon={faCheck} className={AddIcon} />
            </Button>
            <FontAwesomeIcon
              icon={faPlus}
              className={CancelIcon}
              onClick={() => setPopUpStatus(null)}
            />
          </IconContainer>
        </Header>
        <InputText
          label="Titre"
          error={errors.name}
          register={register}
          required
          errorMessage="Merci de renseigner un titre !"
          value={collection?.name}
        />
      </form>
    </Container>
  );
}
