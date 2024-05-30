import React from 'react';
import Book from './Book';

const Library = () => {
    return (
        <>
            <Book name="spring" page="500"/>
            <Book name="java" page={200}/>
            <Book name="react" page={300}/>
          

        </>
    );
}
export default Library;