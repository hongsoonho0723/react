import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

const Effect01 = () => {
    const [num , setNum] = useState(0);

    const [search, setSearch] = useState(0);

    useEffect(()=>{
        console.log("Effect01 랜더링 될때마다");
        console.log("num = "+ num);
        //download();
    })


    useEffect(()=>{
        console.log("Effect01 [] 최초의 Mount될때만...");
        download();
    },[]);



    useEffect(()=>{
        console.log("Effect01 [num] 최초의 num이 변경될때마다...");
    },[num]);


   useEffect(()=>{
        console.log("Effect01 [search] 최초의 Mount될때만...");
        download();
    },[search]);

    const download = ()=>{
        //초기데이터를 조회했다 치고...그결과를 num에 초기화 해준다
        //console.log("전 num ="+num);
        setNum(5);
        //console.log("후 num ="+num);
    }

    return (
        <div>
            <h1>useEffect 함수 Test</h1>
            <h4>num : {num} </h4>
            <button onClick={()=>{setNum(num+1)}}>1씩 증가</button> {/* 내부에 함수를 넣음  */}
         
            <h4>search : {search} </h4>
            <button onClick={()=>{setSearch(2)}}>검색</button> {/* 내부에 함수를 넣음  */}
        </div>
    );
};

export default Effect01;