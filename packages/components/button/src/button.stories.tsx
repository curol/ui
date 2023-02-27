import { Button as ButtonComponent } from './Button';
import { Mail,Loader2 } from "@curol/icons"

import { ComponentStory, ComponentMeta } from '@storybook/react';

export default { title: 'Components/Button', component: ButtonComponent } as ComponentMeta<typeof ButtonComponent>;

// Template
const Button: ComponentStory<typeof ButtonComponent> = ({children,...args}) => <ButtonComponent {...args} >{children}</ButtonComponent>;

export const Default = () => <Button variant="default">Primary</Button>;

export function Destructive() {
  return <Button variant="destructive">Destructive</Button>
}

export function Outline() {
  return <Button variant="outline">Outline</Button>
}

export function Subtle() {
  return <Button variant="subtle">Subtle</Button>
}

export function Ghost() {
  return <Button variant="ghost">Ghost</Button>
}

export function Link() {
  return <Button variant="link">Link</Button>
}


export function WithIcon() {
  return (
    <Button>
      <Mail className="mr-2 h-4 w-4" /> Login with Email
    </Button>
  )
}

export function Loading() {
  return (
    <Button disabled>
      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
      Please wait
    </Button>
  )
}


