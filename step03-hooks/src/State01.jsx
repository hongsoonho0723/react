import React from 'react';
import { useState } from 'react';
import Sub from './Sub';


const State01 = () => {
    //let number =1;
    console.log("State01 랜더링...");
    const [number , setNumber] = useState(0); //

    const addFn = ()=>{
        // let number = 0;
        setNumber(number+1)
        //number++; //증가는 되지만 브라우져에 반영안됨 -> useState를 사용
        console.log("number = "+number);
    }


    return (
        <div>
            <h1>number : {number}</h1>
            <button onClick={addFn}>클릭</button>
            <Sub/>
        </div>
    );
};

export default State01;