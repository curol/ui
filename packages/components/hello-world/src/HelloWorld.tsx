import * as React from "react"

/**
 * Interface for Div component
 */
export interface HelloWorldProps {
  /** Is primary? */
  primary?: boolean
  /** Use label? */
  label?: string
}

/**
 * A simple "Hello World!" component
 *
 * @param props @type {HelloWorldProps}
 * @returns
 */
export function HelloWorld(props: HelloWorldProps) {
  if (props.label) {
    return <div>{props.label}</div>
  }

  return (
  <div className="flex justify-center bg-cyan-500 border border-solid border-red-500">
    <div className="text-black bg-yellow-500 font-bold text-6xl">{"Hello World!"}</div>
  </div>
  )
}

HelloWorld.displayName = "HelloWorld"
