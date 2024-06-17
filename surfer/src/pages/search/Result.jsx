import React, { useEffect, useState } from 'react';
import "../../Result.css";
import { useParams } from 'react-router-dom';
import axios from "axios";

const Result = () => {

    const { keyword } = useParams(); 


    
      const [SearchRes, setSearchRes] = useState({

        song : [
            {
            "albumImage": "",
            "songTitle": "",
            "songSingerName": ""
        }],
        album : [
            {
                "albumImage": "",
                "albumTitle": "",
                "albumSingerName": ""
            }
            
        ],
        playList : [
            {
                "playListName": "",
                "albumImage": "",
                "memberName": ""
            }
        ],
        lyrics : [
            {
                "albumImage": "",
                "songTitle": "",
                "songSingerName": "",
                "lyrics": ""
            }
        ],
      });

    useEffect(() => {

        axios 
        .get("http://localhost:8080/api/search/" + keyword, {
            
        })
        .then((res) => {
            setSearchRes(res.data);
        })
    },[]);


    return (
        <div className='Result'>
            <h3>{keyword} 검색 결과</h3>
            <h3>노래</h3>

            <h3>앨범</h3>

            <h3>플레이리스트</h3>

            <h3>가사</h3>

        </div>
    );
};

export default Result;