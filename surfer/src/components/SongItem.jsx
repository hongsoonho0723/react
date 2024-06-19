import React from "react";
import "../SongItem.css";

const SearchItem = (props) => {
  //   const { song, album, playlist, lyrics } = props.searchkeyword;
  //   const { song } = props.searchkeyword;

  //   const { albumImage, songTitle, songSingerName } = song;

  const { searchkeyword } = props;
  const song = searchkeyword || {}; // song 객체가 없을 경우 빈 객체로 설정
  const { albumImage, songTitle, songSingerName } = song;

  return (
    <div className="song-list">
      <img className="album-image" src={albumImage} alt={songTitle} />
      <div className="song-info">
        <span className="song-title">{songTitle}</span>
        <span className="song-singer">{songSingerName}</span>
      </div>
    </div>
  );
};

export default SearchItem;
