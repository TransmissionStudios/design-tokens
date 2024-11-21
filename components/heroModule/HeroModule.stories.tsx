// components/heroModule/HeroModule.stories.tsx
import type { Meta, StoryObj } from "@storybook/react";

import HeroModule from ".";

const meta: Meta<typeof HeroModule> = {
  title: "Modules/Hero",
  component: HeroModule,
};

export default meta;
type Story = StoryObj<typeof HeroModule>;

export const TextOnly: Story = {
  args: {
    header: "Type out header text here",
    body: "Type out body text here",
  },
};

export const WithButton: Story = {
  args: {
    header: "Type out header text here",
    body: "Type out body text here",
    button: {
      text: "Button text",
      href: "#",
    },
  },
};

export const WithImage: Story = {
  args: {
    header: "Type out header text here",
    body: "Type out body text here",
    button: {
      text: "Button text",
      href: "#",
    },
    image: {
      title: "Image alt text",
      url: "https://dummyimage.com/1276x1282/166434/ffffff&text=Add+image+here",
    },
  },
};