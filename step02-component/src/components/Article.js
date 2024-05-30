import React from 'react';
import Trip from './Trip';
const Article = (props) => {
    return (
        <>
            <p>이번 여름에 바다가 있는 테마 여행을 시작합니다
            <h3>{props.body}</h3>
            </p>
            <Trip></Trip>
        </>
    );
};

export default Article;