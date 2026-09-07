import { twMerge } from "tailwind-merge";

interface ModalProps {
  className?: string;
  children?: React.ReactNode;
}

interface ModalHeaderProps {
  className?: string;
  children?: React.ReactNode;
}

interface ModalDescriptionProps {
  className?: string;
  children?: React.ReactNode;
}

interface ModalBodyProps {
  className?: string;
  children?: React.ReactNode;
}

interface ModalButtonCtaProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  onClick: () => void;
  children?: React.ReactNode;
}

interface ModalCloseButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  onClick: () => void;
  children?: React.ReactNode;
}

interface ModalImageProps {
  className?: string;
  src: string;
  alt: string;
}

interface ModalOverlayProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
}

export default function Modal({ className, children }: ModalProps) {
  return (
    <div
      className={twMerge(
        "fixed left-1/2 top-1/2 z-50 flex w-full max-w-md -translate-x-1/2 -translate-y-1/2 flex-col gap-2 rounded-lg bg-white p-5 shadow-md sm:p-6",
        className,
      )}
    >
      {children}
    </div>
  );
}

Modal.Overlay = function ModalOverlay({
  className,
  ...rest
}: ModalOverlayProps) {
  return (
    <div
      aria-hidden="true"
      className={twMerge(
        "fixed inset-0 z-40 bg-black/40 backdrop-blur-sm",
        className,
      )}
      {...rest}
    />
  );
};

Modal.Header = function ModalHeader({ className, children }: ModalHeaderProps) {
  return (
    <div
      className={twMerge(
        "flex items-center justify-between text-lg font-semibold",
        className,
      )}
    >
      {children}
    </div>
  );
};

Modal.Description = function ModalDescription({
  className,
  children,
}: ModalDescriptionProps) {
  return (
    <div className={twMerge("flex text-sm text-secondary", className)}>
      {children}
    </div>
  );
};

Modal.Body = function ModalBody({ className, children }: ModalBodyProps) {
  return <div className={twMerge("flex text-sm", className)}>{children}</div>;
};

Modal.ButtonCta = function ModalButtonCta({
  className,
  onClick,
  children,
  ...rest
}: ModalButtonCtaProps) {
  return (
    <button
      className={twMerge(
        "flex cursor-pointer items-center justify-center rounded bg-brand px-4 py-2 font-bold text-white hover:bg-brand-darker",
        className,
      )}
      onClick={onClick}
      {...rest}
    >
      {children}
    </button>
  );
};

Modal.CloseButton = function ModalCloseButton({
  className,
  onClick,
  children,
  ...rest
}: ModalCloseButtonProps) {
  return (
    <button
      className={twMerge(
        "absolute right-5 top-5 cursor-pointer text-secondary hover:text-gray-700",
        className,
      )}
      onClick={onClick}
      {...rest}
    >
      {children}
    </button>
  );
};

Modal.Image = function ModalImage({ className, src, alt }: ModalImageProps) {
  return (
    <div className={twMerge("mt-4 flex justify-center", className)}>
      <img src={src} alt={alt} className="max-w-full max-h-full" />
    </div>
  );
};
