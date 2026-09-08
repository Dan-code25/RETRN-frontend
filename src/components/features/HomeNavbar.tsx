import Navbar from '../layout/Navbar';

import logo from '../../assets/logo.svg';

interface HomeNavbarProps {
  avatarSrc?: string;
  onAvatarClick?: () => void;
}

export default function HomeNavbar({ avatarSrc, onAvatarClick }: HomeNavbarProps) {
  return (
    <Navbar>
      <Navbar.Logo logoSrc={logo} />
      <Navbar.User>
        <Navbar.UserInfo className="hidden sm:block">
          <Navbar.UserEmail email="user@example.com" />
          <Navbar.UserRole role="Admin" className="text-end" />
        </Navbar.UserInfo>
        <Navbar.UserAvatar onClick={onAvatarClick} avatarSrc={avatarSrc} />
      </Navbar.User>
    </Navbar>
  );
}
