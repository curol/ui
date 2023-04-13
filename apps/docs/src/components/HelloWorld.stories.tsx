import type { Meta, StoryObj } from "@storybook/react"

// Component
import { HelloWorld } from "../../../../packages/components/hello-world/src/HelloWorld"

// Metadata to configure component story
// More on how to set up stories at: https://storybook.js.org/docs/7.0/react/writing-stories/introduction
const meta = {
  title: "Examples/HelloWorld",
  component: HelloWorld,
  tags: ["autodocs"],
} satisfies Meta<typeof HelloWorld>

export default meta

// Storyobj is a story function
type Story = StoryObj<typeof HelloWorld>

/**
 * A primary HelloWorld component
 */
export const Primary: Story = {
  parameters: {
    docs: {
        story: { inline: true }, // render the story in an iframe
        canvas: { sourceState: "shown" }, // start with the source open
        // source: { type: 'code' }, // forces the raw source code (rather than the rendered JSX).
    },
  },
  render: (args) => (
    <HelloWorld {...args} />
  ),
}
