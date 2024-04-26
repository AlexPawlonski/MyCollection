import { DefaultUser } from "next-auth";

declare module "next-auth" {
  interface Session extends DefaultUser {
    user: DefaultUser & {
      id: string;
    };
  }
}
