"use client";

import React from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { useAppDispatch } from "@/lib/hooks";
import { setSortBy } from "@/lib/features/posts/postsSlice";

const SortSelect = () => {
  const dispatch = useAppDispatch();

  return (
    <Select onValueChange={(value: any) => dispatch(setSortBy(value))}>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Sort By" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Sort By</SelectLabel>
          <SelectItem value="date">Created At</SelectItem>
          <SelectItem value="title">Title</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};

export default SortSelect;
