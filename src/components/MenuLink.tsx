"use client";
import { cn } from "@/lib/utils";
import Link from "next/link";
import type { ComponentType, ReactNode, SVGProps } from "react";

type MenuLinkProps = {
  icon: ComponentType<SVGProps<SVGSVGElement>>;
  children: ReactNode;
  hoveredIcon?: ComponentType<SVGProps<SVGSVGElement>>;
  href: string;
};

const MenuLink = ({
  href,
  icon: Icon,
  hoveredIcon,
  children,
}: MenuLinkProps) => {
  return (
    <Link
      data-test={"nav-link"}
      href={href}
      className={cn("flex group text-navigation-icon  items-center")}
    >
      <div
        className={cn(
          "flex px-2 xl:pr-4 py-2 group-hover:text-betweet-primary-text transition-all group-hover:font-inter-bold rounded-full group-hover:bg-navigation-hover-background items-center  active:bg-pressed-background  lg:gap-x-3"
        )}
      >
        <span className="group-active:scale-95">
          <Icon width={25} height={25} />
        </span>
        <span className="text-sm active:font-extrabold font-semibold group-active:scale-95 hidden xl:inline">
          {children}
        </span>
      </div>
    </Link>
  );
};

export default MenuLink;
