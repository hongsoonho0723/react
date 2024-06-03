import React, { useContext } from 'react';
import Child02 from './Child02';
import { GlobalContext } from './Context02';

const Child01 = () => {

    const {list,setList,btnClick01} = useContext(GlobalContext);
    const addList = ()=>{
        setList([...list,{id:3 , name:"홍순호"}]);

    }

    return (
        <div>
            <h3>Child01 입니다</h3>
            <button onClick={btnClick01}>눌러봐</button>
            <button onClick={addList}>추가</button>
            <hr/>
            <Child02/>
        </div>
    );
};

export default Child01;