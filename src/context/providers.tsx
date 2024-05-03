"use client";

import { CollectionProvider } from "./collectionsContext";
import { PopUpProvider } from "./popUpContext";

interface Props {
  children: React.ReactNode;
}

export function Providers({ children }: Props) {
  return (
    <PopUpProvider>
      <CollectionProvider>{children}</CollectionProvider>
    </PopUpProvider>
  );
}
