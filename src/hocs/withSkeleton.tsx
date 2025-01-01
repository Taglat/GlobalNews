import { ComponentType } from "react";
import Skeleton from "../components/skeleton/skeleton";
import { SkeletonType } from "../types";

function withSkeleton<T extends object>({ Component, type, count }: { 
  Component: ComponentType<T>;
  type?: SkeletonType;
  count?: number;
}) {
  return function WithSkeleton(props: { isLoading: boolean } & T) {
    const { isLoading, ...restProps } = props;

    if (isLoading) {
      return <Skeleton type={type} count={count} />;
    }

    return <Component {...(restProps as T)} />;
  };
}

export default withSkeleton;
