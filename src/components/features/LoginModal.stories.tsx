import type { Meta, StoryObj } from "@storybook/react-vite";
import LoginModal from "./LoginModal";

const meta = {
  title: "Components/features/LoginModal",
  component: LoginModal,
  tags: ["autodocs"],
} satisfies Meta<typeof LoginModal>;

export default meta;

type Story = StoryObj<typeof LoginModal>;

export const Default: Story = {
  render: () => <LoginModal onGoogleLogin={() => {}} onClose={() => {}} />,
};