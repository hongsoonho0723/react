import React from 'react';
import { useMemo } from 'react';
import { useState } from 'react';

const Memo01 = () => {
    
    const[list,setList] = useState([1,2,3,4]);
    //list 항목 더하기 기능
    const [str , setStr] = useState("합계결과");

    const getAddResult = () =>{
        let sum = 0;
        list.forEach((i)=>{
            sum = sum+i;

        });
        console.log("sum = "+ sum);
        return sum;
        
    }//getAddResult 함수끝

    //기억해야할 함수를 useMemo를 사용한다 - 메모이제이션
    const addResult = useMemo(()=>{return getAddResult()},[list]);





    return (
        <div>
            <h3>useMemo 사용하기</h3> 
            <button onClick={()=>{setList([...list , 10]) }}>리스트추가</button>
            <button onClick={()=>{setStr("리스트합계")}}>문자변경</button>
            {/* <div>{str} : {getAddResult()} </div> */}
            <div>합계 : {addResult} </div>

            {
                list.map((item,index)=><h4 key={index}>{item}</h4>)
            }
        </div>
    );
};

export default Memo01;