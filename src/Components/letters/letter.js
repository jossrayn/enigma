import React from 'react';
import styled from '@emotion/styled';

const Letter = (props) => {
    var letra = props.letter;

    const Button = styled.div`
        padding: 2px;
        background-color: #D7CCC8 ;
        font-size: 20px;
        width: 50px;
        height: 30px;
        border-radius: 5px;
        border-bottom: 3px solid black;
        color: black;
        font-weight: bold;
        cursor: cursor;
        &:hover {
        color: white
    `
    return (
        <Button>{letra}</Button>
    )
} 

export default Letter;