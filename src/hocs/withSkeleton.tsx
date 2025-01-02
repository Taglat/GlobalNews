import { ComponentType } from "react";
import Skeleton from "../components/skeleton/skeleton";
import { SkeletonType } from "../types";

function withSkeleton<T extends object>({ Component, type, count, direction }: { 
  Component: ComponentType<T>;
  type?: SkeletonType;
  count?: number;
  direction?: "column" | "row"
}) {
  return function WithSkeleton(props: { isLoading: boolean } & T) {
    const { isLoading, ...restProps } = props;

    if (isLoading) {
      return <Skeleton type={type} count={count} direction={direction} />;
    }

    return <Component {...(restProps as T)} />;
  };
}

export default withSkeleton;
