import styled from 'styled-components';
import { mobile } from '../../styles/mobile';
import { shadow } from '../../styles/shadows';

var PowerUpStyles = styled.div`
    display: inline-grid;
    grid-template-columns: 1fr 1fr;
    row-gap: 25px;
    width: 100%;
    justify-content: space-evenly;
    justify-items: center;
    align-content: space-evenly;
    align-items: center;

    .power-up-layout {
        display: grid;
        grid-template-columns: 1fr 1fr;
        justify-content: space-evenly;
        justify-items: center;
        height: calc(100% - 25px);
    }

    .box {
        height: 400px;
    }

    .power-up-image {
        position: absolute;
        left: 0;
        top: 0;
        background-color: #629bd9;
        padding: 8px;
        border-radius: 32px;

        img {
            width: 32px;
        }
    }

    .power-up-screenshot {
        max-width: 256px;
        height: 172px;
        width: calc(100% - 20px);
        overflow: hidden;
        display: inline-block;
        margin: 10px;
        align-self: end;
        
        img {
            position: relative;
            left: -40px;
        }
    }

    .power-up-mario {
        margin: 8px;
        align-self: center;

        img {
            height: 64px;
        }
    }

    @media screen and (max-width: ${mobile}) {
        grid-template-columns: 1fr;
        justify-items: center;

        .power-up-box {
            width: 100%;
            max-width: 400px;
        }
    }
`;

export default PowerUpStyles;