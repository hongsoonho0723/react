import React, { useContext } from 'react';
import { GlobalContext } from './Context02';

const Child03 = () => {
    const {btnClick02} = useContext(GlobalContext);

    return (
        <div>
            <h3>Child03 입니다</h3>
            <button onClick={btnClick02}>클릭</button>
        </div>
    );
};

export default Child03;