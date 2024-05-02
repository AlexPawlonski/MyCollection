import { AddButton } from "@/components/dataUx";
import { Container, Header, Main, Title } from "./css";
import { getUserCollections } from "./action";
import Collection from "../Collection";

export default async function CollectionContainer() {
  const collections = await getUserCollections();

  return (
    <Container>
      <Header>
        <Title>Vos collection</Title>
        <AddButton type="collection" />
      </Header>
      <Main>
        {collections.map((collection, key) => (
          <Collection key={key} collection={collection} />
        ))}
      </Main>
    </Container>
  );
}
