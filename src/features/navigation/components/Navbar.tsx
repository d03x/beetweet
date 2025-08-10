import { Comunities } from "../assets/icons/Comunities";
import { HomeIcon } from "../assets/icons/Home";
import { Message } from "../assets/icons/Message";
import { Profile } from "../assets/icons/Profile";
import { Search } from "../assets/icons/Search";
import { Hastag } from "../assets/icons/Hastag";
import MenuLink from "@/components/MenuLink";
import { Settings } from "../assets/icons/Settings";
export const Navbar = () => {
  return (
    <>
      <MenuLink href="" icon={HomeIcon}>
        Home
      </MenuLink>
      <MenuLink href="explore" icon={Search}>
        Search
      </MenuLink>
      <MenuLink href="app/message" icon={Message}>
        Message
      </MenuLink>
      <MenuLink href="feeds" icon={Hastag}>
        Feeds
      </MenuLink>
      <MenuLink href="comunity" icon={Comunities}>
        Komunitas
      </MenuLink>
      <MenuLink href="profile" icon={Profile}>
        My Profile
      </MenuLink>
      <MenuLink href="setting" icon={Settings}>
        Setting
      </MenuLink>
    </>
  );
};
