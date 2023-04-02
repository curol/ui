import { Icons } from "@curol/icons"
import { Meta, StoryObj } from "@storybook/react"

import { Button } from "../../../../packages/components/button/src/Button"

const meta = {
  title: "Components/Button",
  component: Button,
  tags: ["autodocs"],
} satisfies Meta<typeof Button>

export default meta

// Storyobj is a story function
type Story = StoryObj<typeof Button>

export const Primary: Story = {
  args: {
    variant: "default",
  },
  parameters: {
    docs: {
      story: { inline: true }, // render the story in an iframe
      canvas: { sourceState: "shown" }, // start with the source open
      // source: { type: 'code' }, // forces the raw source code (rather than the rendered JSX).
    },
  },
  render: (args) => <Button {...args}>Button Component</Button>,
}

export const Outline: Story = {
  ...Primary,
  args: {
    variant: "outline",
  },
}

export const Subtle: Story = {
  ...Primary,
  args: {
    variant: "subtle",
  },
}

export const Ghost: Story = {
  ...Primary,
  args: {
    variant: "ghost",
  },
}

export const Link: Story = {
  ...Primary,
  args: {
    variant: "link",
  },
}

export const WithIcon: Story = {
  args: {
    variant: "default",
  },
  parameters: {
    docs: {
      story: { inline: true }, // render the story in an iframe
      canvas: { sourceState: "shown" }, // start with the source open
      // source: { type: 'code' }, // forces the raw source code (rather than the rendered JSX).
    },
  },
  render: (args) => (
    <Button {...args}>
      <Icons.mail className="mr-2 h-4 w-4" /> Login with Email
    </Button>
  ),
}

export const Loading: Story = {
  args: {
    variant: "default",
  },
  parameters: {
    docs: {
      story: { inline: true }, // render the story in an iframe
      canvas: { sourceState: "shown" }, // start with the source open
      // source: { type: 'code' }, // forces the raw source code (rather than the rendered JSX).
    },
  },
  render: (args) => (
    <Button disabled {...args}>
      <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
      Please wait
    </Button>
  ),
}
