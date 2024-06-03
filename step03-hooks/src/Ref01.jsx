import React, { useRef } from 'react';

const Ref01 = () => {
    
    const myRef = useRef();

    const colorChange = () =>{
        console.log(myRef);

        //바닐라 자바스크립트 방식 
        // document.getElementById("a").style.backgroundColor="red";

        //실제 dom에 접근하기 위해서 useRef를 사용한다
        myRef.current.style.backgroundColor="blue";
        console.log(myRef.current.innerText);
        console.log(myRef.current.innerHTML);
        myRef.current.innerText="변경되니?";
    }
    return (
        <div>
            <h2>React Hooks - useref : Dom접근 </h2>
            <button onClick={colorChange}> 바탕색변경</button>

            {/* 바닐라 자바스크립트 방식  */}
            {/* <div id="a">박스</div> */}

            <div ref={myRef}>박스</div>
        
        </div>
    );
};

export default Ref01;