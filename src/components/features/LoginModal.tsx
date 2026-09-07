import Modal from "../ui/Modal";

import { X } from "lucide-react";
import {FcGoogle} from "react-icons/fc";

import avatarPlaceholder from "../../assets/avatar-placeholder.svg";

interface LoginModalProps {
  onGoogleLogin: () => void;
  onClose: () => void;
}

export default function LoginModal({ onGoogleLogin, onClose }: LoginModalProps) {
  return (
    <Modal.Overlay>
      <Modal className="justify-center items-center text-center gap-2">
        <Modal.CloseButton onClick={onClose}>
          <X className="h-5 w-5" />
        </Modal.CloseButton>
        <Modal.Image
          src={avatarPlaceholder}
          alt="Avatar Placeholder"
          className="mt-2 h-16 w-16"
        />
        <Modal.Header className="font-bold">
          <h2>Login Account</h2>
        </Modal.Header>
        <Modal.Description>
          <p>Sign in using your TUP email</p>
        </Modal.Description>
        <Modal.ButtonCta
          onClick={onGoogleLogin}
          className="mt-4 w-full font-semibold bg-white text-black border border-gray-300 rounded-lg shadow-sm hover:bg-gray-50 gap-2"
        >
          <FcGoogle className="h-5 w-5" />
          Continue with Google
        </Modal.ButtonCta>
      </Modal>
    </Modal.Overlay>
  );
}

