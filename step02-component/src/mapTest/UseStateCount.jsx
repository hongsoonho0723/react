import React, { useState } from 'react';

const UseStateCount = () => {
    
    const [no , setNo] = useState(0); // 0은 no초기값 / setNo는 값변경할때 사용하는 함수
    
    const minusFn =()=>{
        setNo(no-1);  
    }
    
    const plusFn =()=>{
        setNo(no+1);  
        
    }
    
    
    return (
        <div>
            
            <button onClick={minusFn}>빼기</button>
            <span>{no}</span>
            <button onClick={plusFn}>더하기</button>
        </div>
    );
};

export default UseStateCount;<button>빼기</button>