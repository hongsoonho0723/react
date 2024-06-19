import React, { useEffect, useState } from "react";
import "../../Search.css";
import { useParams } from "react-router-dom";
import axios from "axios";
import SongItem from "../../components/SongItem";

const Search = () => {
  const { keyword } = useParams();

  const [SearchRes, setSearchRes] = useState({
    song: [],
    album: [],
    playlist: [],
    lyrics: [],
  });
  useEffect(() => {
    axios.get("http://localhost:8080/api/search/" + keyword).then((res) => {
      setSearchRes(res.data);
    });
  }, [keyword]);

  return (
    <div className="Search">
      <h3>{keyword} 검색 결과</h3>

      {/* <div>
        <h3>노래</h3>
        {SearchRes.map((search) => (
          <SongItem key={search.song} searchkeyword={search} />
        ))}
      </div> */}

      <h3>노래</h3>
      <span>
        {SearchRes.song.length > 0 ? (
          SearchRes.song.map((song, index) => (
            <SongItem key={index} searchkeyword={song} />
          ))
        ) : (
          <p>No songs found</p>
        )}
      </span>

      <h3>앨범</h3>

      <h3>플레이리스트</h3>

      <h3>가사</h3>
    </div>
  );
};

export default Search;
