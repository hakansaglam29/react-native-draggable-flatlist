import React, { useContext } from "react";
import { DraggableFlashListProps } from "../types";

const PropsContext = React.createContext<
  DraggableFlashListProps<any> | undefined
>(undefined);

type Props<T> = DraggableFlashListProps<T> & { children: React.ReactNode };

export default function PropsProvider<T>({ children, ...props }: Props<T>) {
  return (
    <PropsContext.Provider value={props}>{children}</PropsContext.Provider>
  );
}

export function useProps<T>() {
  const value = useContext(PropsContext) as
    | DraggableFlashListProps<T>
    | undefined;
  if (!value) {
    throw new Error("useProps must be called from within PropsProvider!");
  }
  return value;
}
