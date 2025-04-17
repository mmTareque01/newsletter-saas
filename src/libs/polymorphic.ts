import { ElementType, ComponentPropsWithoutRef, ComponentPropsWithRef } from 'react'

export type AsProp<T extends ElementType> = {
  as?: T
}

export type PropsToOmit<T extends ElementType, P> = keyof (AsProp<T> & P)

export type PolymorphicComponentProps<
  T extends ElementType,
  Props = {}
> = React.PropsWithChildren<Props & AsProp<T>> &
  Omit<ComponentPropsWithoutRef<T>, PropsToOmit<T, Props>>

export type PolymorphicRef<T extends ElementType> = ComponentPropsWithRef<T>['ref']
