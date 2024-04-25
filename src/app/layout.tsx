import { Body, Glow, GlowContainer } from "@/app/css";
import "../style/style.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

interface Props {
  children: React.ReactNode;
}

export default async function Layout({ children }: Props) {
  return (
    <html lang="en">
      <head>
        <title>MyCollection</title>
        <meta name="description" content="Saas for collector" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <Body className={inter.className}>
        {children}
        <GlowContainer>
          <Glow className="jumbo"></Glow>
        </GlowContainer>
      </Body>
    </html>
  );
}
