import * as React from "react"

export interface DivProps {
  children: React.ReactNode
}

export function Div(props: DivProps) {
  return <div>{props.children}</div>
}

Div.displayName = "Div"
