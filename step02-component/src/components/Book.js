import React from 'react';

const Book = (props) => {
    return (
        <>
            <h1>이 책은 Spring {props.name} 책입니다.</h1>
            <h2>이 책의 총 페이지 수는 {props.page} 페이지로 이루어져 있습니다.</h2>
        </>
    );
}

export default Book;