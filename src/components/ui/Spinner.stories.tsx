import type { Meta, StoryObj } from "@storybook/react-vite";
import Spinner from "./Spinner";

const meta = {
  title: "Components/ui/Spinner",
  component: Spinner,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Spinner>;

export default meta;

type Story = StoryObj<typeof Spinner>;

export const Default: Story = {};

export const Brand: Story = {
  args: {
    className: "h-8 w-8 text-brand",
  },
};

export const Small: Story = {
  args: {
    className: "h-4 w-4 text-secondary",
  },
};
