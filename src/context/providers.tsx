"use client";

import { PopUpProvider } from "./popUpContext";

interface Props {
  children: React.ReactNode;
}

export function Providers({ children }: Props) {
  return <PopUpProvider>{children}</PopUpProvider>;
}
