"use client";
import { VerifiedIcon } from "@/components/icon";
import SearchForm from "./SearchForm";
import {faker} from "@faker-js/faker"
const Search = () => {
  return (
    <div className="px-3 mt-3">
      <SearchForm />
      <div className="rounded-lg text-text-secondary text-sm bg-background border-primary-outline border  mt-2">
        <header className="border-b px-2 py-2.5 border-b-primary-outline">
          Search for <b>@wkwkwkw</b>
        </header>
        <div>
          {Array.from({length:5}).map((_, index) => {
            return (
              <div
                key={index}
                className="flex p-2  cursor-pointer hover:bg-hovered-background items-center gap-x-2"
              >
                <div className="h-9 w-9 rounded-full bg-primary-background"></div>
                <div className="flex flex-col">
                  <div className="flex items-center gap-x-2">
                    <span className="font-semibold">{ faker.person.fullName() }</span>
                    {faker.datatype.boolean() && <VerifiedIcon className="text-accent-blue" width={16}/> }
                  </div>
                  <span className="text-xs text-betweet-secondary-text">
                    @{faker.internet.username()}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export { Search };
