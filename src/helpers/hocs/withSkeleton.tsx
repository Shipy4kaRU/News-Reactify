import { FC } from "react";
import Skeleton from "../../components/Skeleton/Skeleton.tsx";

interface WithSkeletonProps<T> {
  Component: FC<T>;
  type: string;
  count: number;
}

export default function withSkeleton<T extends object>({
  Component,
  type,
  count,
}: WithSkeletonProps<T>): FC<T & { isLoading: boolean }> {
  return function WithSkeleton(props) {
    const { isLoading, ...restProps } = props;
    if (isLoading) {
      return <Skeleton type={type} count={count} />;
    }

    return <Component {...(restProps as T)} />;
  };
}
