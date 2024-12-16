import React, { useState } from 'react';
import styled from 'styled-components';
import bg_pixel from './image/bg_pixel.png';
import CardComponent from './components/CardComponent';
import FortuneComponent from './components/FortuneComponent';

const BackgroundContainer = styled.div`
    background-image: linear-gradient(#3495ff, #85bfff);
    height: 100vh;
    overflow: hidden;
`;

const BackgroundComponent = styled.div`
    height: 100dvh;
    position: relative;
    overflow: hidden;
`;

const BackgroundImageComponent = styled.img`
    position: absolute;
    width: 100vw;
    max-height: 100dvh;
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
                <BackgroundImageComponent src={bg_pixel} />
                {change ? <FortuneComponent /> : <CardComponent onClickButton={onClickButton} />}
            </BackgroundComponent>
        </BackgroundContainer>
    );
}

export default App;
