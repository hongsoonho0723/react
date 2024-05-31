import React from 'react';
import Sub,{num,name} from './Sub';
// import {num,name} from './Sub';

const ExportTest = () => {
    return (
        <div>
            <h2>export 연습</h2>
            num : {num} / name : {name}
            <Sub/>
        </div>
    );
};

export default ExportTest;