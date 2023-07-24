"use client";

import { useState, useEffect } from "react";
import SearchBar from "./SearchBar";
import StockList from "./StockList";

export default function SearchWrapper({ defaultData }) {
  const [query, setQuery] = useState("");
  const [searchData, setSearchData] = useState([]);
  const [noResults, setNoResults] = useState(false);

  useEffect(() => {
    if (!query) setNoResults(false);
  }, [query]);

  return (
    <div className="flex flex-col items-center justify-between px-4 pb-8">
      <SearchBar
        query={query}
        setQuery={setQuery}
        setNoResults={setNoResults}
        shouldEmpty={searchData.length}
        getSearchResults={(results) => {
          setSearchData(results);
          setNoResults(results.length == 0);
        }}
      />
      <StockList
        noResults={noResults}
        isSearch={!!searchData.length}
        searchData={searchData}
        defaultData={defaultData}
      />
    </div>
  );
}
