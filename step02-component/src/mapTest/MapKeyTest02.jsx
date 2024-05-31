import React, { useState } from 'react';

const MapKeyTest01 = () => {
    console.log("MapkeyTest02 call..... rendering.....")
    //useState에 의해 관리되는 변수의 상태가 변경되면 화면을 다시 그린다
    //- rerendering된다 --> 컨포넌트 = 함수가 다시 호출된다..(함수안에 있는 모든 변수는 초기화)

    //inputValue는 text박스에 값이 변경되면 setInputValue를 이용해서 값을 수정한다
    const [inputValue, setInputValue] = useState('');

    // const menu = ["짬뽕","짜장"];
    const [list, setList] = useState(["짬뽕","짜장"]);
    //const [inputValue, setInputValue] = useState("");
    //추가
    const addList = ()=>{
        //console.log("inputValue"+inputValue);
        //text박스의 값을 조회
        
        setList((preList)=>[inputValue,...preList]);//preList는 지정가능
        //추가후에 text박스 지우기
        setInputValue("");

    }
    const inputChangeValue = (e)=>{
        setInputValue(e.target.value);
        
    }

    return (
        <div>
            <input type="text" onChange={inputChangeValue} value={inputValue}/>
            <button onClick={addList}>추가</button>

            <ul>
                {
                list.map((menu,index)=>{
                    return <li key={menu}> {menu}</li>

                })

                }   
            </ul>




        </div>
    );
};

export default MapKeyTest01;
