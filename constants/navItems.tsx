import { IconProps } from "@chakra-ui/react";
import { HashtagIcon } from "../icons/Hashtag";
import { HomeIcon } from "../icons/HomeIcon";
import { MessageIcon } from "../icons/Message";
import { NotificationIcon } from "../icons/Notification";
import { ProfileIcon } from "../icons/Profile";
import { SavedIcon } from "../icons/Saved";

interface NavItem {
  label: string;
  icon: React.FC<IconProps>;
}

export const navItems = [
  {
    label: "Inicio",
    icon: HomeIcon,
  },
  {
    label: "Explorar",
    icon: HashtagIcon,
  },
  {
    label: "Notificaciones",
    icon: NotificationIcon,
  },
  {
    label: "Mensajes",
    icon: MessageIcon,
  },
  {
    label: "Guardados",
    icon: ProfileIcon,
  },
  {
    label: "Perfil",
    icon: SavedIcon,
  },
] as NavItem[];
