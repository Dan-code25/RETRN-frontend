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

export default function Modal({ className, children }: ModalProps) {
  return (
    <div
      className={`flex flex-col gap-2 relative w-full max-w-md rounded-lg bg-white p-5 shadow-md sm:p-6 ${className ?? ""}`}
    >
      {children}
    </div>
  );
}

Modal.Header = function ModalHeader({ className, children }: ModalHeaderProps) {
  return (
    <div
      className={`flex items-center justify-between text-lg font-semibold ${className ?? ""}`}
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
    <div className={`flex text-sm text-secondary ${className ?? ""}`}>
      {children}
    </div>
  );
};

Modal.Body = function ModalBody({ className, children }: ModalBodyProps) {
  return <div className={`flex text-sm ${className ?? ""}`}>{children}</div>;
};

Modal.ButtonCta = function ModalButtonCta({
  className,
  onClick,
  children,
  ...rest
}: ModalButtonCtaProps) {
  return (
    <button
      className={`cursor-pointer flex items-center justify-center bg-brand hover:bg-brand-darker text-white font-bold py-2 px-4 rounded ${className ?? ""}`}
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
      className={`cursor-pointer absolute right-5 top-5 text-secondary hover:text-gray-700 ${className ?? ""}`}
      onClick={onClick}
      {...rest}
    >
      {children}
    </button>
  );
};
