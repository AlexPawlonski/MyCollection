import { Img, UpdateButton } from "@/components/dataUx";
import {
  ButtonWrapper,
  CollectionPictureWrapper,
  Container,
  IsSelected,
} from "./css";
import DefaultCollectionImg from "@public/defaultCollectionPictur.webp";

interface Props {
  collection: {
    id: string;
    name: string;
    createdAt: Date;
    updatedAt: Date;
    accountId: string | null;
  };
}

export default function Collection({ collection }: Props) {
  return (
    <Container>
      <ButtonWrapper isActive={true}>
        <UpdateButton type="collection" id={collection.id} />
      </ButtonWrapper>
      <CollectionPictureWrapper isActive={true}>
        <Img
          src={DefaultCollectionImg.src}
          alt={"collection-default-img"}
          width="100%"
        />
      </CollectionPictureWrapper>
      <IsSelected isActive={true} />
    </Container>
  );
}
