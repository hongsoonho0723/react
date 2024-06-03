import React, { useEffect, useRef, useState } from 'react';

const Ref02 = () => {

    const inputRef = useRef();
    const[no, setNo] = useState(0);

    //컴포넌트가 랜더링 되면 커서놓기
    useEffect(()=>{
        console.log("useEffect 랜더링...");
        console.log(inputRef);
        inputRef.current.focus();
    },[]); 
    //},[no]); // no가 변경될때는 호출가능
    
    const login = () =>{
        //no증가
        setNo(no+1);
        //text의 value 조회
        alert(`${inputRef.current.value}님 로그인 입니다`);//자바스크립트 영역이기때문에 ``을 사용해 ${}를 사용
        inputRef.current.value="";
        inputRef.current.focus();
    }


    return (
        <div>
            no : {no}<br/>
            <input type ='text' ref={inputRef}></input>
            <button onClick={login}>로그인</button>
        </div>
    );
};

export default Ref02;