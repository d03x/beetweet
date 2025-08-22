"use client";
import Layout from "@/components/Layout";
import { HomeNavbar } from "@/features/navbar";
import { Search } from "@/features/search";
import React from "react";

export const ClientPage = () => {
  return (
    <Layout>
      <Layout.Inner>
        <Layout.Main>
          <HomeNavbar />
          <Layout.Main.Inner>
            OKE
          </Layout.Main.Inner>
        </Layout.Main>
        <Layout.Aside>
          <Search />
          <div>
            WKWK
          </div>
        </Layout.Aside>
      </Layout.Inner>
    </Layout>
  );
};
