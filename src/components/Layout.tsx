import { cn } from "@/lib/utils";
import React, { createContext, useEffect, useState } from "react";
import { ReactNode } from "react";

type MainLayoutType = {
  aside: boolean;
  setAside: (state: boolean) => void;
};
const MainLayoutContext = createContext<MainLayoutType>({
  aside: false,
  setAside: (a: boolean) => {},
});

const Layout = ({ children }: { children: ReactNode }) => {
  const [aside, setAside] = useState<boolean>(true);

  return (
    <MainLayoutContext.Provider
      value={{
        setAside,
        aside,
      }}
    >
      {children}
    </MainLayoutContext.Provider>
  );
};

const useMainLayoutContext = () => {
  const ctx = React.useContext(MainLayoutContext);
  if (ctx) {
    return ctx;
  }
  console.log("Context invalid");

  return;
};

const Inner = ({ children }: { children: ReactNode }) => {
  const ctx = useMainLayoutContext();
  useEffect(() => {
    ctx?.setAside(false);
  }, []);

  return (
    <div className="flex">{children}</div>
  );
};

const Aside = ({ children }: { children: ReactNode }) => {
  const ctx = useMainLayoutContext();
  return <div className="border-l hidden md:flex flex-col scrollbar-hide  max-h-screen min-h-screen overflow-y-auto sticky top-0 w-(--aside-width) border-primary-outline">{children}</div>;
};
const Main = ({ children }: { children: ReactNode }) => {
  return <div className="w-full">{children}</div>;
};

const MainInner = ({ children }: { children: ReactNode })=>{
  return <div>{ children }</div>;
}

Main.Inner = MainInner;

const Navbar = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <nav className={cn("border-b  border-primary-outline h-12", className)}>
      {children}
    </nav>
  );
};

Main.Navbar = Navbar;

Layout.Inner = Inner;
Layout.Aside = Aside;
Layout.Main = Main;

export default Layout;
