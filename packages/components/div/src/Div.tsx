import * as React from "react"

/**
 * Interface for Div component
 */
export interface DivProps {
  children: React.ReactNode
  /** Is primary? */
  primary?: boolean
  /** Text inside div */
  label?: string
}

/**
 * A simple div component
 *
 * @param props @type {DivProps}
 * @returns
 */
export function Div(props: DivProps) {
  if (props.label) {
    return <div>{props.label}</div>
  }

  return <div>{props.children}</div>
}

Div.displayName = "Div"
