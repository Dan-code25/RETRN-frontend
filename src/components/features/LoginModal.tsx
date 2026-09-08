import Modal from "../ui/Modal";

import { X } from "lucide-react";
import { FcGoogle } from "react-icons/fc";

import logo from "../../assets/logo.svg";
import Spinner from "../ui/Spinner";

interface LoginModalProps {
  onGoogleLogin: () => void;
  onClose: () => void;
  authError?: string;
  isLoading: boolean;
}

export default function LoginModal({
  onGoogleLogin,
  onClose,
  authError,
  isLoading,
}: LoginModalProps) {
  return (
    <Modal.Overlay>
      <Modal className="justify-center items-center text-center gap-2">
        <Modal.CloseButton onClick={onClose}>
          <X className="h-5 w-5" />
        </Modal.CloseButton>
        <Modal.Image src={logo} alt="Logo" className="mt-2 h-15 w-30" />
        <Modal.Header className="font-bold">
          <h2>Login Account</h2>
        </Modal.Header>
        <Modal.Description>
          <p>Sign in using your TUP email</p>
        </Modal.Description>
        <Modal.ButtonCta
          onClick={onGoogleLogin}
          disabled={isLoading}
          className="mt-4 w-full gap-2 rounded-lg border border-gray-300 bg-white font-semibold text-black shadow-sm hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {isLoading ? (
            <Spinner className="h-5 w-5 text-gray-500" />
          ) : (
            <>
              <FcGoogle className="h-5 w-5" />
              Continue with Google
            </>
          )}
        </Modal.ButtonCta>
        {authError && (
          <Modal.Description className="text-red-500 text-xs">
            <p>{authError}</p>
          </Modal.Description>
        )}
      </Modal>
    </Modal.Overlay>
  );
}
