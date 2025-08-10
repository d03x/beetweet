"use client";
import { SearchIcon } from "@/components/icon";
export default function SearchForm() {
  return (
    <form
      action=""
      className="flex bg-secondary-background flex-1 group rounded-lg ring-1 focus-within:ring-accent-blue/65 focus-within:bg-accent-blue/20 ring-border-input  disabled:bg-background-input-disabled items-center"
    >
      <button className="px-2 pr-1 text-text-secondary group-hover:text-accent-blue/65 group-focus-within:text-accent-blue/65">
        <SearchIcon width={20} />
      </button>
      <input placeholder="Mau cari apa?" type="text" className="flex-1 text-sm  outline-none py-2" />
      
    </form>
  );
}
