import React from 'react';
let num=100;
let name="heejung";
const Sub = () => {
    return (
        <div>
            Sub입니다.
            num : {num} / name : {name}
        </div>
    );
};

export default Sub;
export {num,name};