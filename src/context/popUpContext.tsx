import React, { createContext, useState, ReactElement } from "react";

interface PopUpContextType {
  isActive: boolean;
  setIsActive: React.Dispatch<React.SetStateAction<boolean>>;
  popUpType: "collection" | "item" | "collection-update" | "item-update" | null;
  setPopUpType: React.Dispatch<
    React.SetStateAction<
      "collection" | "item" | "collection-update" | "item-update" | null
    >
  >;
}

export const PopUpContext = createContext<PopUpContextType>({
  isActive: false,
  setIsActive: () => {},
  popUpType: null,
  setPopUpType: () => {},
});

export const PopUpProvider = ({ children }: { children: React.ReactNode }) => {
  const [isActive, setIsActive] = useState<boolean>(false);
  const [popUpType, setPopUpType] = useState<
    "collection" | "item" | "collection-update" | "item-update" | null
  >(null);

  return (
    <PopUpContext.Provider
      value={{ isActive, setIsActive, popUpType, setPopUpType }}
    >
      {children}
    </PopUpContext.Provider>
  );
};
