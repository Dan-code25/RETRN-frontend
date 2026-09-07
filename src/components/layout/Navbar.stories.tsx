import type { Meta, StoryObj } from "@storybook/react-vite";
import Navbar from "./Navbar";

import logo from "../../assets/logo.svg";

const meta = {
  title: "Components/Layout/Navbar",
  component: Navbar,
  tags: ["autodocs"],
} satisfies Meta<typeof Navbar>;

export default meta;

type Story = StoryObj<typeof Navbar>;

export const NotLoggedIn: Story = {
  parameters: {
    layout: "fullscreen",
  },
  render: () => (
    <Navbar>
      <Navbar.Logo logoSrc={logo} />
      <Navbar.Button
        onClick={() => {}}
        buttonText="Login"
        className="px-5 py-2 sm:px-6 sm:py-3"
      />
    </Navbar>
  ),
};

export const LoggedInWithoutAvatar: Story = {
  parameters: {
    layout: "fullscreen",
  },
  render: () => (
    <Navbar>
      <Navbar.Logo logoSrc={logo} />
      <Navbar.User>
        <Navbar.UserInfo className="hidden sm:block">
          <Navbar.UserEmail email="user@example.com" />
          <Navbar.UserRole role="Admin" className="text-end" />
        </Navbar.UserInfo>
        <Navbar.UserAvatar />
      </Navbar.User>
    </Navbar>
  ),
};

export const LoggedInWithAvatar: Story = {
  parameters: {
    layout: "fullscreen",
  },
  render: () => (
    <Navbar>
      <Navbar.Logo logoSrc={logo} />
      <Navbar.User>
        <Navbar.UserInfo className="hidden sm:block">
          <Navbar.UserEmail email="user@example.com" />
          <Navbar.UserRole role="Admin" className="text-end" />
        </Navbar.UserInfo>
        <Navbar.UserAvatar avatarSrc="https://i.pravatar.cc/150?img=12" />
      </Navbar.User>
    </Navbar>
  ),
};
