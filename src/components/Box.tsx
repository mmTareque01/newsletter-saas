"use client";

import {
  ElementType,
  ForwardRefExoticComponent,
  PropsWithChildren,
  RefAttributes,
  forwardRef,
} from "react";

type AsProp<T extends ElementType> = {
  as?: T;
};

type BoxOwnProps = {
  className?: string;
};

type PolymorphicComponentProps<
  T extends ElementType,
  P = {}
> = PropsWithChildren<P & AsProp<T>> &
  Omit<React.ComponentPropsWithoutRef<T>, keyof (AsProp<T> & P)>;

type PolymorphicComponentWithRef<
  T extends ElementType,
  P = {}
> = ForwardRefExoticComponent<
  PolymorphicComponentProps<T, P> & RefAttributes<any>
>;

const BoxInner = <T extends ElementType = "div">(
  {
    as,
    className,
    children,
    ...rest
  }: PolymorphicComponentProps<T, BoxOwnProps>,
  ref: React.Ref<any>
) => {
  const Component = as || "div";
  return (
    <Component ref={ref} className={className} {...rest}>
      {children}
    </Component>
  );
};

export const Box = forwardRef(BoxInner) as PolymorphicComponentWithRef<
  "div",
  BoxOwnProps
>;
