import React, { createContext, useState, ReactElement } from "react";

interface Status {
  type: "collection" | "item";
  id?: string;
}
interface PopUpContextType {
  popUpStatus: Status | null;
  setPopUpStatus: React.Dispatch<React.SetStateAction<Status | null>>;
}

export const PopUpContext = createContext<PopUpContextType>({
  popUpStatus: null,
  setPopUpStatus: () => null,
});

export const PopUpProvider = ({ children }: { children: React.ReactNode }) => {
  const [popUpStatus, setPopUpStatus] = useState<Status | null>(null);

  return (
    <PopUpContext.Provider value={{ popUpStatus, setPopUpStatus }}>
      {children}
    </PopUpContext.Provider>
  );
};
