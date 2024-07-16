import React from "react";
import { Input } from "@/components/ui/input";

function Search() {
  function handleSearch(term: string) {
    console.log(term);
  }

  return (
    <Input
      type="text"
      placeholder="Search"
      className="max-w-xs"
      onChange={(e) => {
        handleSearch(e.target.value);
      }}
    />
  );
}

export default Search;
