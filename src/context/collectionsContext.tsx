import React, { createContext, useState } from "react";

export interface Collection {
  id: string;
  name: string;
  createdAt: Date;
  updatedAt: Date;
  accountId: string | null;
}

interface CollectionContextType {
  collectionSelected: Collection | null;
  setCollectionSelected: React.Dispatch<
    React.SetStateAction<Collection | null>
  >;
}

export const CollectionContext = createContext<CollectionContextType>({
  collectionSelected: null,
  setCollectionSelected: () => null,
});

export const CollectionProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [collectionSelected, setCollectionSelected] =
    useState<Collection | null>(null);

  return (
    <CollectionContext.Provider
      value={{ collectionSelected, setCollectionSelected }}
    >
      {children}
    </CollectionContext.Provider>
  );
};
