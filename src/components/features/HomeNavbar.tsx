import Navbar from "../layout/Navbar";

import logo from "../../assets/logo.svg";

import type { UserProfile } from "../../types/userProfile";

interface HomeNavbarProps {
  user?: UserProfile | null;
  onLoginClick: () => void;
  onAvatarClick?: () => void;
}

export default function HomeNavbar({ user, onAvatarClick, onLoginClick }: HomeNavbarProps) {
  return (
    <Navbar>
      <Navbar.Logo logoSrc={logo} />
      <Navbar.User>
        {user ? (
          <>
            <Navbar.UserInfo className="hidden sm:block">
              <Navbar.UserEmail email={user.email} />
              <Navbar.UserRole role={user.role} className="text-end" />
            </Navbar.UserInfo>
            <Navbar.UserAvatar
              onClick={onAvatarClick}
              avatarSrc={user.avatarSrc}
            />
          </>
        ) : (
          <Navbar.Button buttonText="Login" onClick={onLoginClick} />
        )}
      </Navbar.User>
    </Navbar>
  );
}
