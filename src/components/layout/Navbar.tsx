import type { ComponentPropsWithoutRef, ReactNode } from "react";

import avatarPlaceholder from "../../assets/avatar-placeholder.svg";

interface NavbarProps {
  className?: string;
  children?: ReactNode;
}

interface NavbarLogoProps {
  className?: string;
  logoSrc: string;
}

interface NavbarButtonProps extends ComponentPropsWithoutRef<"button"> {
  className?: string;
  onClick: () => void;
  buttonText: string;
}

interface NavbarUserAvatarProps {
  className?: string;
  avatarSrc?: string;
}

interface NavbarUserInfoProps {
  className?: string;
  children?: ReactNode;
}

interface NavbarUserEmailProps {
  className?: string;
  email: string;
}

interface NavbarUserRoleProps {
  className?: string;
  role: string;
}

interface NavbarUserProps {
  className?: string;
  children?: ReactNode;
}

export default function Navbar({ className, children }: NavbarProps) {
  return (
    <nav
      className={`navbar-shadow sticky top-0 z-50 flex min-h-14 w-full items-center justify-between gap-6 bg-white px-4 py-3 ${className ?? ""}`}
    >
      {children}
    </nav>
  );
}

Navbar.Logo = function NavbarLogo({ className, logoSrc }: NavbarLogoProps) {
  return (
    <div className={`shrink-0 ${className ?? ""}`}>
      <img
        className="h-9 max-w-full w-auto object-contain sm:h-12"
        src={logoSrc}
        alt="Logo"
      />
    </div>
  );
};

Navbar.Button = function NavbarButton({
  className,
  onClick,
  buttonText,
  type,
  ...rest
}: NavbarButtonProps) {
  return (
    <button
      className={`cursor-pointer inline-flex min-h-9 max-w-full shrink-0 items-center justify-center truncate rounded-md bg-brand px-3 py-2 text-xs font-medium text-white transition-colors hover:bg-brand-darker sm:min-h-10 sm:px-4 sm:text-sm ${className ?? ""}`}
      onClick={onClick}
      type={type}
      {...rest}
    >
      {buttonText}
    </button>
  );
};

Navbar.UserInfo = function NavbarUserInfo({
  className,
  children,
}: NavbarUserInfoProps) {
  return <div className={`${className ?? ""}`}>{children}</div>;
};

Navbar.UserEmail = function NavbarUserEmail({
  className,
  email,
}: NavbarUserEmailProps) {
  return (
    <div className={`text-sm font-medium ${className ?? ""}`}>
      <p>{email}</p>
    </div>
  );
};

Navbar.UserRole = function NavbarUserRole({
  className,
  role,
}: NavbarUserRoleProps) {
  return (
    <div className={`text-xs ${className ?? ""}`}>
      <p>{role}</p>
    </div>
  );
};

Navbar.UserAvatar = function NavbarUserAvatar({
  className,
  avatarSrc,
}: NavbarUserAvatarProps) {
  return (
    <div
      className={`h-10 w-10 rounded-full overflow-hidden sm:h-13 sm:w-13 ${className ?? ""}`}
    >
      <img src={avatarSrc ?? avatarPlaceholder} alt="User Avatar" />
    </div>
  );
};

Navbar.User = function NavbarUser({ className, children }: NavbarUserProps) {
  return (
    <div className={`flex items-center gap-2 ${className ?? ""}`}>
      {children}
    </div>
  );
};
