import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import { instance } from '../instance';
import text_bubble from '../image/text_bubble.png';
import HEALTH_card from '../image/HEALTH_secret.png';
import back_card from '../image/back_card.png';
import CTA_button from '../image/CTA_button.png';

const fadeOutContainerAnimation = keyframes`
  0% {
    opacity: 1
  }
  100% {
    opacity: 0
  }
`;

const FadeOutContainer = styled.div`
    &.click {
        opacity: 1;
        animation: ${fadeOutContainerAnimation} 0.2s ease forwards;
    }
`;

const fadeInBubbleComponent = keyframes`
  0% {
    opacity: 0;
    transform: translateY(10px);
  }
  100% {
    opacity: 1;
    transform: translateY(0px);
  }
`;

const shake = keyframes`
  0% {
    transform: translateY(0);
  }
  25% {
    transform: translateY(-4px);
  }
  50% {
    transform: translateY(0);
  }
  75% {
    transform: translateY(4px);
  }
  100% {
    transform: translateY(0);
  }
`;

const BubbleComponent = styled.div`
    @media only screen and (max-width: 375px) {
        top: 16px;
    }
    position: absolute;
    top: 44px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    animation: ${fadeInBubbleComponent} 0.45s ease-in-out 1.2s forwards, ${shake} 1s ease-in-out 1.65s infinite;
    opacity: 0;
    transform: translateY(10px);
`;

const TextBubble = styled.div`
    @media only screen and (max-width: 375px) {
        height: 36.8px;
        width: 228.8px;
        padding-top: 16px;
        font-size: 12.8px;
        line-height: 12.8px;
    }
    background-image: url(${text_bubble});
    background-size: cover;
    height: 46px;
    width: 286px;
    padding-top: 20px;
    color: var(--Gray-Scale-Gray900, #1c1c1e);
    text-align: center;
    font-family: Pretendard;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 16px;
    letter-spacing: -0.4px;
`;

const CenterContainer = styled.div`
    @media only screen and (max-width: 375px) {
        height: 342px;
        top: 78.8px;
    }
    position: absolute;
    top: 126px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100vw;
    height: 458px;
`;
const CardContainer = styled.div`
    perspective: 1000px;
    display: flex;
    width: 100vw;
    justify-content: center;
`;

const flipAndStretch = keyframes`
  0% {
    transform: rotateY(0deg);
  }
  70% {
    transform: rotateY(180deg) scaleX(1.05);
  }
  100% {
    transform: rotateY(180deg) scaleX(1);
  }
`;

const unFlipAndStretch = keyframes`
  0% {
    transform: rotateY(180deg);
  }
  70% {
    transform: rotateY(360deg) scaleX(1.05);
  }
  100% {
    transform: rotateY(360deg) scaleX(1);
  }
`;

const fadeInCardImageComponet = keyframes`
  0% {
    opacity: 0;
    transform: translateY(40px);
  }
  100% {
    opacity: 1;
    transform: translateY(0px);
  }
`;

const CardImageComponet = styled.div`
    @media only screen and (max-width: 375px) {
        width: 204px;
        height: 300px;
    }
    width: 272px;
    height: 400px;
    transform-style: preserve-3d;
    transition: transform 0.6s;
    animation: ${fadeInCardImageComponet} 0.6s ease-in-out forwards;
    opacity: 0;
    transform: translateY(40px);
    &.flipped {
        opacity: 1;
        animation: ${flipAndStretch} 0.6s ease forwards;
    }
    &.unFlipped {
        opacity: 1;
        animation: ${unFlipAndStretch} 0.6s ease forwards;
    }
`;

const CardFront = styled.div<{ url: string }>`
    background-image: url(${(props) => props.url});
    background-size: cover;
    position: absolute;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    backface-visibility: hidden;
`;

const CardFrontDefault = styled.div`
    background-image: url(${HEALTH_card});
    background-size: cover;
    position: absolute;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    backface-visibility: hidden;
`;

const CardBack = styled.div`
    background-image: url(${back_card});
    background-size: cover;
    position: absolute;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    backface-visibility: hidden;
    transform: rotateY(180deg);
`;

const CardText = styled.div`
    @media only screen and (max-width: 375px) {
        padding: 0px 22px 0px 24px;
        width: 158px;
        height: 244px;
    }
    display: flex;
    flex-direction: column;
    padding: 0px 28px 0px 32px;
    width: 212px;
    height: 312px;
`;

const CardTitle = styled.div`
    @media only screen and (max-width: 375px) {
        font-size: 22px;
        margin-bottom: 15px;
    }
    color: var(--Gray-Scale-Gray800, #3a3a3c);
    font-family: Galmuri9;
    font-size: 28px;
    font-style: normal;
    font-weight: 400;
    line-height: 120%; /* 33.6px */
    letter-spacing: -0.56px;
    margin-bottom: 19.4px;
`;

const CardContext = styled.div`
    @media only screen and (max-width: 375px) {
        font-size: 14px;
        line-height: 20px;
        letter-spacing: -0.3px;
    }
    color: var(--Gray-Scale-Gray800, #3a3a3c);
    font-family: Pretendard;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 162.5%; /* 26px */
    letter-spacing: -0.4px;
`;

const fadeInBottomText = keyframes`
  0% {
    opacity: 0;
    transform: translateY(50px) scale(0.7);
  }
  100% {
    opacity: 1;
    transform: translateY(0px) scale(1);
  }
`;

const BottomText = styled.div`
    @media only screen and (max-width: 375px) {
        font-size: 20px;
        line-height: 30px;
    }
    color: #ffffff;
    text-align: center;
    font-family: Pretendard;
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    line-height: 34px; /* 100% */
    letter-spacing: -0.4px;
    animation: ${fadeInBottomText} 0.6s ease-in-out 0.6s forwards;
    opacity: 0;
    transform: translateY(50px) scale(0.7);
`;

const fadeInButtonComponent = keyframes`
  0% {
    transform: translateY(90px);
  }
  100% {
    transform: translateY(0px);
  }
`;

const ButtonComponent = styled.div`
    @media only screen and (max-width: 375px) {
        bottom: 27.2px;
    }
    position: absolute;
    bottom: 34px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    animation: ${fadeInButtonComponent} 0.45s ease-in-out 1.65s forwards;
    transform: translateY(90px);
`;

const CTAButton = styled.div`
    @media only screen and (max-width: 375px) {
        height: 28.8px;
        width: 274.4px;
        padding-top: 16px;
        font-size: 12.8px;
        line-height: 12.8px;
    }
    background-image: url(${CTA_button});
    background-size: cover;
    height: 36px;
    width: 343px;
    padding-top: 20px;
    color: var(--Gray-Scale-White, #fff);
    text-align: center;
    font-family: Pretendard;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 16px;
    letter-spacing: -0.4px;
`;

function CardComponent(props: { onClickButton: () => void }) {
    const [flipped, setFlipped] = useState('');
    const [clicked, setClicked] = useState('');
    const [id, setId] = useState('1');
    const [url, setUrl] = useState('');
    const [fortuneData, setFortuneData] = useState<any>({
        data: { id: 1, category: 'HEALTH', score: 100, description: '' },
    });

    const fetchData = async () => {
        try {
            const response = await instance.get('/api/v1/fortunes/' + id, {
                withCredentials: true,
            });
            setFortuneData(response.data);
            return response.data;
        } catch (error) {
            console.error('Error fetching data:', error);
            throw error;
        }
    };

    const onClickButtonFunc = () => {
        setClicked('click');
        props.onClickButton();
    };

    const handleCardClick = () => {
        if (!flipped || flipped === 'unFlipped') {
            setFlipped('flipped');
        } else {
            setFlipped('unFlipped');
        }
    };

    useEffect(() => {
        const queryParams = new URLSearchParams(window.location.search);
        setUrl(queryParams.get('imageUrl') || '');
        setId(queryParams.get('fortuneId') || '1');
        fetchData();
    }, []);

    return (
        <FadeOutContainer className={clicked}>
            <BubbleComponent>
                <TextBubble>뒤집어서 운세를 확인해주세요~</TextBubble>
            </BubbleComponent>
            <CenterContainer>
                <CardContainer>
                    <CardImageComponet className={flipped} onClick={handleCardClick}>
                        {url === '' ? <CardFrontDefault /> : <CardFront url={url} />}
                        <CardBack>
                            <CardText>
                                <CardTitle>일이삼사오육칠</CardTitle>
                                <CardContext>{fortuneData.data.description}</CardContext>
                            </CardText>
                        </CardBack>
                    </CardImageComponet>
                </CardContainer>
                <BottomText>금전 부적</BottomText>
            </CenterContainer>
            <ButtonComponent>
                <CTAButton onClick={onClickButtonFunc}>나도 부적 뽑기</CTAButton>
            </ButtonComponent>
        </FadeOutContainer>
    );
}
export default CardComponent;
