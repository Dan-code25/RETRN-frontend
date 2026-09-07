import type { Meta, StoryObj } from "@storybook/react-vite";
import Modal from "./Modal";

import { X } from "lucide-react";

const meta = {
  title: "Components/ui/Modal",
  component: Modal,
  tags: ["autodocs"],
} satisfies Meta<typeof Modal>;

export default meta;

type Story = StoryObj<typeof Modal>;

export const Default: Story = {
  render: () => (
    <Modal>
      <Modal.CloseButton onClick={() => {}}>
        <X className="h-5 w-5" />
      </Modal.CloseButton>
      <Modal.Header>
        <h2>Modal Title</h2>
      </Modal.Header>
      <Modal.Description>
        This is a description of the modal. It provides additional context and
        information to the user.
      </Modal.Description>
      <Modal.Body>
        <p>This is the main content of the modal.</p>
      </Modal.Body>
      <Modal.ButtonCta onClick={() => {}}>Call to Action</Modal.ButtonCta>
    </Modal>
  ),
};

export const Centered: Story = {
  parameters: {
    layout: "centered",
  },
  render: () => (
    <>
      <Modal.Overlay />
      <Modal className="items-center justify-center text-center">
        <Modal.CloseButton onClick={() => {}}>
          <X className="h-5 w-5" />
        </Modal.CloseButton>
        <Modal.Header className="mt-2">
          <h2>Modal Title</h2>
        </Modal.Header>
        <Modal.Description className="mt-2">
          This is a description of the modal. It provides additional context and
          information to the user.
        </Modal.Description>
        <Modal.Body className="mt-4">
          <p>
            This is the body of the modal. It contains the main content of the
            modal.
          </p>
        </Modal.Body>
        <Modal.ButtonCta
          onClick={() => {
            alert("CTA button clicked!");
          }}
          className="mt-4"
        >
          Call to Action
        </Modal.ButtonCta>
      </Modal>
    </>
  ),
};

export const WithImage: Story = {
  parameters: {
    layout: "centered",
  },
  render: () => (
    <Modal className="items-center text-center">
      <Modal.CloseButton onClick={() => {}}>
        <X className="h-5 w-5" />
      </Modal.CloseButton>
      <Modal.Image
        src="https://picsum.photos/id/237/200/300"
        alt="Sample image"
        className="mb-2"
      />
      <Modal.Header>
        <h2>Modal Header</h2>
      </Modal.Header>
      <Modal.Description>Modal Description</Modal.Description>
      <Modal.ButtonCta onClick={() => {}}>Continue</Modal.ButtonCta>
    </Modal>
  ),
};
