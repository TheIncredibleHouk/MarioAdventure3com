import styled from 'styled-components';

var NesPadMenuStyles = styled.div`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    font-size: 50%;
    color: white;
    font-weight: bold;
    text-align: center;

    .nes-pad-menu-layout {
        display: grid;
        grid-template-columns: 1fr 1fr;
        height: 20%;
        width: 100%;
        gap: 5%;
    }

    .start, .select {
        height: auto;
        width: 100%;
        border-radius: 100px;
        background-color: black;
        padding: 10%;
    
        &.true {
            background-color: red;
        }
    }

    
    &.inline {
        height: 20px;
        width: 40px;
        position: relative;
        top: -2px;
        margin-bottom: -20px;
        margin-top: -20px;
        font-size: 8px;
        text-align: center;

        .start, .select {
            width: 35px;
            height: auto;
            padding: 0 3px;
            margin-right: 1px;
            display: none;

            &.true {
                display: block;
            }
        }
    }

    &:not(.inline)
    {
        .start, .select {
            border: 1px solid white;
        }
    }
`;

export default NesPadMenuStyles;