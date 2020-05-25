import React from 'react';
import styled from '@emotion/styled';

import Letter from '../letters/letter';

const Keyboard = (props) => {

    const Board = styled.div`
        margin: 0 auto;
        margin-top: 1%;
        background: #795548;
        width: 800px;
        height: 200px;
        display: flex;
        flex-direction: column;
        border-radius: 15px;
    `
    return (
        <Board>
            <Letter letter="A" />
            <Letter letter="B" />
            <Letter letter="C" />
            <Letter letter = "D"/>
            <Letter letter = "E"/>
            <Letter letter="F" />
            <Letter letter="G" />
            <Letter letter="H" />
            <Letter letter="I" />
            <Letter letter = "J"/>
            <Letter letter="K" />
            
        </Board>
    )
} 

export default Keyboard;