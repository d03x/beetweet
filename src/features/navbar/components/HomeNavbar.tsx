import { BackIcon, SearchIcon } from "@/components/icon";
import BrandIcon from "@/components/icon/Brand";
import Layout from "@/components/Layout";
import { Hastag } from "@/features/navigation/assets/icons/Hastag";
import { ReactNode } from "react";
export const TabLink = ({ children }: { children: ReactNode }) => {
  return (
    <a
      className="flex-1 py-3 relative transition-all text-text-secondary group flex items-center justify-center hover:bg-hovered-background h-full font-semibold text-sm"
      href=""
    >
      <span className="group-active:scale-95">{children}</span>
      <span className="w-full absolute bottom-0 scale-y-0 group-hover:scale-y-100 h-[3px] rounded-full bg-button-primary-background transition-all"></span>
    </a>
  );
};
export const HomeNavbar = () => {
  return (
    <Layout.Main.Navbar className="h-auto">
      <div className="flex items-center py-2 px-3">
        <div className="flex-1 flex items-center justify-center">
          <BrandIcon />
        </div>
        <div>
          <button className=" text-navigation-icon hover:text-text-secondary rounded-lg p-1 hover:bg-hovered-background cursor-pointer">
            <Hastag />
          </button>
        </div>
      </div>
      <div className="flex items-center h-full">
        <TabLink>Discover</TabLink>
        <TabLink>Following</TabLink>
        <TabLink>Feeds</TabLink>
        <TabLink>History</TabLink>
      </div>
    </Layout.Main.Navbar>
  );
};
