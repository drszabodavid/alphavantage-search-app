"use client";

import { useState } from "react";

export default function SearchBar() {
  const [query, setQuery] = useState(null);
  return (
    <div className="text-center my-12">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          console.log(query);
        }}
      >
        <input
          className="text-black border-2 border-r-0 border-black rounded-l-lg h-12 px-3 py-2 hover:border-black/70 focus:outline-none"
          type="text"
          placeholder="Search stock..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
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
