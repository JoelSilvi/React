import React, { useState, useEffect } from "react";
import Loader from "./Loader";
import SongForm from "./SongForm";
import SongDetails from "./SongDetails";

const SongSearch = () => {
  const [search, setSearch] = useState(null);
  const [lyric, setLyric] = useState(null);
  const [bio, SetBio] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSearch = (data) => {
    // console.log(data);
    setSearch(data);
  };

  return (
    <div>
      <h2>Song Search</h2>
      {loading && <Loader />}
      <SongForm handleSearch={handleSearch} />
      <SongDetails search={search} lyric={lyric} bio={bio} />
    </div>
  );
};

export default SongSearch;
