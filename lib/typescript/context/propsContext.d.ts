import React from "react";
import { DraggableFlashListProps } from "../types";
declare type Props<T> = DraggableFlashListProps<T> & {
    children: React.ReactNode;
};
export default function PropsProvider<T>({ children, ...props }: Props<T>): JSX.Element;
export declare function useProps<T>(): DraggableFlashListProps<T>;
export {};
