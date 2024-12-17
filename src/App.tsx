import React, { useState } from 'react';
import styled from 'styled-components';
import bg_pixel from './image/bg_pixel.png';
import bg_pixel_wide from './image/bg_pixel_wide.png';
import CardComponent from './components/CardComponent';
import FortuneComponent from './components/FortuneComponent';

const BackgroundContainer = styled.div`
    background-image: linear-gradient(#3495ff, #85bfff);
    height: 100dvh;
    overflow: hidden;
    @supports (-webkit-touch-callout: none) {
        height: -webkit-fill-available;
    }
`;

const BackgroundComponent = styled.div`
    height: 100svh;
    position: relative;
    overflow: hidden;
`;

const BackgroundImageComponent = styled.img`
    position: absolute;
    width: 100vw;
    max-height: 100svh;
`;

function App() {
    const [change, setChange] = useState(false);
    const onClickButton = () => {
        setTimeout(function () {
            setChange(true);
        }, 200);
    };

    return (
        <BackgroundContainer>
            <BackgroundComponent>
                {window.innerWidth > 589 ? (
                    <BackgroundImageComponent src={bg_pixel_wide} />
                ) : (
                    <BackgroundImageComponent src={bg_pixel} />
                )}

                {change ? <FortuneComponent /> : <CardComponent onClickButton={onClickButton} />}
            </BackgroundComponent>
        </BackgroundContainer>
    );
}

export default App;
