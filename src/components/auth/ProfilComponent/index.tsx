import { UserName, Container, UserPictureWrapper, TitleWrapper } from "./css";
import { Session } from "next-auth";
import LogoutButton from "../LogoutButton";
import { Img } from "@/components/dataUx";
import defaultUserPicture from "@public/defaultUserPicture.webp";

interface Props {
  session: Session;
}

export default function ProfilComponent({ session }: Props) {
  return (
    <Container>
      <TitleWrapper>
        <UserName>{session.user.name}</UserName>
        <LogoutButton />
      </TitleWrapper>
      <UserPictureWrapper>
        {session.user.image ? (
          <Img
            src={session.user.image}
            alt={`${session.user.name}-user-picture`}
            width="100%"
          />
        ) : (
          <Img
            src={defaultUserPicture.src}
            alt={"defaultUserPicture"}
            width="100%"
          />
        )}
      </UserPictureWrapper>
    </Container>
  );
}
