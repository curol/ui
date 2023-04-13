import type { Meta, StoryObj } from "@storybook/react"

// Component
import { Div } from "../../../../packages/components/div/src/Div"

// Metadata to configure component story
// More on how to set up stories at: https://storybook.js.org/docs/7.0/react/writing-stories/introduction
const meta = {
  title: "Examples/Div",
  component: Div,
  tags: ["autodocs"],
} satisfies Meta<typeof Div>

export default meta

// Storyobj is a story function
type Story = StoryObj<typeof Div>

/**
 * A primary div component
 */
export const Primary: Story = {
  args: {
    label: "Primary Div",
  },
  parameters: {
    docs: {
      story: { inline: true }, // render the story in an iframe
      canvas: { sourceState: "shown" }, // start with the source open
      source: { type: "code" }, // forces the raw source code (rather than the rendered JSX).
    },
  },
}

/**
 * A secondary Div component
 */
export const Secondary: Story = {
  args: {
    label: "Secondary Div",
  },
}
