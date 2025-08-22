"use client";
import Image from "next/image";
import { NewPostIcon } from "../assets/icons/Pencil";
import image from "../../../../public/unnamed.jpg";
import Link from "next/link";

export const Loggedin = () => {
  return (
    <div className="flex items-center space-x-2">
      <Image
        alt="DADAN"
        className="w-9 rounded-full ring-2 ring-primary-outline cursor-pointer select-none pointer-events-auto object-cover h-9 aspec-square"
        width={40}
        height={40}
        src={image}
      />

      <Link href={'/new-post/composer'} className="w-full flex items-center justify-center space-x-2 active:bg-button-primary-pressed cursor-pointer disabled:text-button-disabled-text disabled:bg-button-disabled-background py-2.5 font-semibold rounded-full text-button-primary-text text-xs bg-button-primary-background">
        <NewPostIcon width={17} height={17} />
        <span> New Posts</span>
      </Link>
    </div>
  );
};
