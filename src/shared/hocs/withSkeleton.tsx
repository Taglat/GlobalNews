import { ComponentType } from "react";
import Skeleton from "../ui/skeleton/skeleton";
import { SkeletonType } from "../types";

type Props = {
  isLoading: boolean;
  direction?: "row" | "column";
  type?: SkeletonType;
}

function withSkeleton<T extends object>({ Component, count}: { 
  Component: ComponentType<T>;
  count?: number;
}) {
  return function WithSkeleton(props: Props & T) {
    const { isLoading, type, direction = "column", ...restProps } = props;

    if (isLoading) {
      return <Skeleton type={type} count={count} direction={direction} />;
    }

    return <Component type={type} {...(restProps as T)} />;
  };
}

export default withSkeleton;
