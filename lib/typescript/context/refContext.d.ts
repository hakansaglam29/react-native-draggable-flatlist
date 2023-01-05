import React from "react";
import { FlashList } from "@shopify/flash-list";
import Animated, { WithSpringConfig } from "react-native-reanimated";
import { CellData, DraggableFlashListProps } from "../types";
declare type RefContextValue<T> = {
    propsRef: React.MutableRefObject<DraggableFlashListProps<T>>;
    animationConfigRef: React.MutableRefObject<WithSpringConfig>;
    cellDataRef: React.MutableRefObject<Map<string, CellData>>;
    keyToIndexRef: React.MutableRefObject<Map<string, number>>;
    containerRef: React.RefObject<Animated.View>;
    flatlistRef: React.RefObject<FlashList<T>> | React.ForwardedRef<FlashList<T>>;
    scrollViewRef: React.RefObject<Animated.ScrollView>;
};
export default function RefProvider<T>({ children, flatListRef, }: {
    children: React.ReactNode;
    flatListRef?: React.ForwardedRef<FlashList<T>> | null;
}): JSX.Element;
export declare function useRefs<T>(): RefContextValue<T>;
export {};
