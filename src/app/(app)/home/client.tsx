"use client";
import { BackIcon, CloseIcon, SearchIcon } from "@/components/icon";
import Layout from "@/components/Layout";
import { Popup } from "@/components/Popup";
import Popover from "@/components/UI/Popover";
import { HomeNavbar } from "@/features/navbar";
import ProfileName from "@/features/profile/ProfileName";
import { Search } from "@/features/search";
import { faker } from "@faker-js/faker";
import React from "react";
function TwitterPost({ name, nickname, content, image }: any) {
  return (
    <div className="flex gap-3 py-4 border-b border-slate-200">
      {/* Avatar */}
      <img
        src={faker.image.avatar()}
        alt={name}
        className="w-12 h-12 rounded-full object-cover"
      />

      {/* Post content */}
      <div className="flex-1 text-sm">
        {/* Header: Name, nickname, time */}
        <ProfileName name={name} nickname={faker.internet.displayName()} />
        {/* Post text */}
        <p className="text-sm mt-1">{content}</p>

        {/* Optional image */}
        {image && (
          <img
            src={image}
            alt="Post media"
            className="mt-2 rounded-xl border border-slate-200 object-cover w-full max-h-80"
          />
        )}

        {/* Actions */}
        <div className="flex justify-between mt-2 text-slate-500 text-sm">
          <button className="flex items-center gap-1 hover:text-sky-500">
            💬 {faker.number.int({ min: 1, max: 200 })}
          </button>
          <button className="flex items-center gap-1 hover:text-green-500">
            🔁 {faker.number.int({ min: 1, max: 200 })}
          </button>
          <button className="flex items-center gap-1 hover:text-pink-500">
            ❤️ {faker.number.int({ min: 1, max: 200 })}
          </button>
          <button className="flex items-center gap-1 hover:text-sky-500">
            📤
          </button>
        </div>
      </div>
    </div>
  );
}

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
             {[1, 2, 3].map((_, index) => (
              <TwitterPost
                key={index}
                name={faker.person.fullName()}
                nickname={faker.internet.userName().toLowerCase()}
                content={faker.lorem.paragraph(10)}
                image={
                  index % 2 === 0
                    ? faker.image.url()
                    : null
                }
              />
            ))}
           </div>
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
