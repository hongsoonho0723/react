import React, { useRef, useState } from 'react';

const Ref03 = () => {
    const [count , setCount] = useState(0);
    const countRef = useRef(0);

    const stateUp =()=>{
        setCount(count+1);
    }
    
    //countRef.current 값을 변경하여도 화면을 다시 그리지 않는다 (not rerendering)
    // 내부적으로 숫자는 증가한다
    const refUp =()=>{
        countRef.current = countRef.current+1;
        console.log("countRef.current = "+ countRef.current);
    }

    return (
        <div>
            <p>
            State : {count} <button onClick={stateUp}>state Up</button>
            </p>

            <p>
            State {countRef.current}: <button onClick={refUp}>Ref Up</button>
            </p> 
        </div>
    );
};

export default Ref03;