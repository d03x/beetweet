"use client";
import { BackIcon, CloseIcon, SearchIcon } from "@/components/icon";
import Layout from "@/components/Layout";
import { Popup } from "@/components/Popup";
import { HomeNavbar } from "@/features/navbar";
import { Search } from "@/features/search";
import { faker } from "@faker-js/faker";
import React from "react";

export const ClientPage = () => {
  // Use useEffect to safely access window after component mounts
  const [windowName, setWindowName] = React.useState("");

  React.useEffect(() => {
    setWindowName(window.location.host);
  }, []);

  return (
    <Layout>
      <Layout.Inner>
        <Layout.Main>
          <HomeNavbar />
          <Layout.Main.Inner>
            <div className="p-3">
              {[1, 2, 3].map((_, index) => {
                return (
                  <div key={index}>
                    <Popup actionType="hover">
                      <Popup.Trigger>
                        <div className="cursor-pointer">@{faker.person.firstName()}</div>
                      </Popup.Trigger>
                      <Popup.Content>
                        <div className="rounded-xl">
                          <div className="flex items-start gap-4">
                            <div className="w-16 h-16 rounded-full bg-slate-200 animate-pulse" />
                            <div className="flex-1 space-y-2">
                              <div className="w-28 h-3 bg-slate-200 rounded animate-pulse" />
                              <div className="w-20 h-2 bg-slate-200 rounded animate-pulse" />
                              <div className="w-full h-2 bg-slate-200 rounded animate-pulse" />
                              <div className="w-3/4 h-2 bg-slate-200 rounded animate-pulse" />
                              <div className="flex gap-4 mt-3">
                                <div className="w-16 h-3 bg-slate-200 rounded animate-pulse" />
                                <div className="w-16 h-3 bg-slate-200 rounded animate-pulse" />
                              </div>
                              <div className="mt-3 flex gap-2">
                                <div className="w-16 h-6 bg-slate-200 rounded animate-pulse" />
                                <div className="w-16 h-6 bg-slate-200 rounded animate-pulse" />
                              </div>
                            </div>
                          </div>
                        </div>
                      </Popup.Content>
                    </Popup>
                  </div>
                );
              })}
            </div>
          </Layout.Main.Inner>
        </Layout.Main>
        <Layout.Aside>
          <Search />
        </Layout.Aside>
      </Layout.Inner>
    </Layout>
  );
};
