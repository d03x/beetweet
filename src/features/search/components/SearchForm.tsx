"use client";
import { SearchIcon } from "@/components/icon";
import { useEffect, useState } from "react";
export default function SearchForm({onSearch}:{
  onSearch:(term : string)=>void,
}) {

  const [keywords,setKeywords] = useState<string>('')
  const [debounceQuery,setDebounceQuery] = useState<string>('')

  useEffect(()=>{
      const handler = setTimeout(()=>{
        setDebounceQuery(keywords);
      },500)
      return ()=>{
        clearTimeout(handler);
      }
  },[keywords])

  useEffect(()=>{
    onSearch( keywords?.toString() )
  },[debounceQuery])

  return (
    <form
      action=""
      className="flex bg-secondary-background flex-1 group rounded-lg ring-1 focus-within:ring-accent-blue/65 focus-within:bg-accent-blue/20 ring-border-input  disabled:bg-background-input-disabled items-center"
    >
      <button className="px-2 pr-1 text-text-secondary group-hover:text-accent-blue/65 group-focus-within:text-accent-blue/65">
        <SearchIcon width={20} />
      </button>
      <input onChange={e=>setKeywords(e.target.value)} placeholder="Mau cari apa?" type="text" className="flex-1 text-sm  outline-none py-2" />
      
    </form>
  );
}
