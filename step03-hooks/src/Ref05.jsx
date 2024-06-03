import React, { useEffect, useRef, useState } from 'react';

const Ref05 = () => {
    const [count , setCount] = useState(0);
    const [rederCount , setRederCount] = useState(1);
    const countRef = useRef(0);
    //컴포넌트가 총 몇번 랜더링 되었는지 회수를 계산
    useEffect(()=>{
        console.log("랜더링....")
        //setCount(count+1) //무한루프(state가 변ㄷ경되면 컴포넌트함수가 다시 호출된다 -> useEffect가 다시 호출)
        //setRederCount(rederCount+1);
        console.log("countRef.current = "+countRef.current);
        countRef.current = countRef.current+1;
    });

    return (
        <div>
            <p>Count :{countRef.current} <button onClick={()=>{setCount(count+1)}}>Up</button></p>
        </div>
    );
};

export default Ref05;