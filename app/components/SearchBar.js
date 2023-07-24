"use client";

import getSearchData from "@/lib/getSearchData";
import { useEffect } from "react";

export default function SearchBar({
  query,
  setQuery,
  setNoResults,
  getSearchResults,
  shouldEmpty
}) {
  useEffect(() => {
    if (!query && shouldEmpty) getSearchResults([]);
  }, [shouldEmpty, getSearchResults, query]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const results = await getSearchData(query);
    const filteredData = results.bestMatches.filter((item) => {
      return !item["1. symbol"].includes(".");
    });
    getSearchResults(filteredData);
  };

  return (
    <div className="text-center my-12">
      <form onSubmit={handleSubmit}>
        <input
          className="text-black border-2 border-r-0 border-black rounded-l-lg h-12 px-3 py-2 hover:border-black/70 focus:outline-none"
          type="text"
          placeholder="Search stock..."
          value={query}
          onChange={(e) => {
            setNoResults(false);
            setQuery(e.target.value);
          }}
        />
        <button
          className="bg-black text-white rounded-r-lg px-3 py-3 hover:bg-black/70 transition duration-200"
          type="submit"
        >
          Search
        </button>
      </form>
    </div>
  );
}
