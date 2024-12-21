import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import Lottie from 'lottie-react';
import { instance } from '../instance';
import text_bubble from '../image/text_bubble.png';
import HEALTH_card from '../image/HEALTH_secret.png';
import back_card from '../image/back_card.png';
import CTA_button from '../image/CTA_button.png';

const TopComponent = styled.div<{ $height: number }>`
    position: relative;
    height: ${(props) => props.$height}px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const fadeOutContainerAnimation = keyframes`
  0% {
    opacity: 1
  }
  100% {
    opacity: 0
  }
`;

const FadeOutContainer = styled.div`
    height: 100dvh;
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
    margin-bottom: 16px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    animation: ${fadeInBubbleComponent} 0.45s ease-in-out 1.8s forwards, ${shake} 1s ease-in-out 2.25s infinite;
    opacity: 0;
    transform: translateY(10px);
    margin-bottom: 10px;
`;

const TextBubble = styled.div`
    background-image: url(${text_bubble});
    background-size: cover;
    height: 53px;
    width: 228.8px;
    position: relative;
    @media only screen and (min-width: 375px) {
        height: 66px;
        width: 286px;
    }
`;

const fadeOutTextBubbleContainer = keyframes`
  0% {
    opacity: 1;
    transform: translateY(0px);
  }
  100% {
    opacity: 0;
    transform: translateY(10px);
  }
`;

const TextBubbleContainer = styled.div`
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 32.9px;
    width: 228.8px;
    font-size: 12.8px;
    line-height: 12.8px;
    top: 6.4px;
    color: var(--Gray-Scale-Gray900, #1c1c1e);
    text-align: center;
    font-family: Pretendard;
    font-style: normal;
    font-weight: 500;
    letter-spacing: -0.4px;
    @media only screen and (min-width: 375px) {
        top: 9.5px;
        height: 40px;
        width: 286px;
        font-size: 16px;
        line-height: 16px;
    }
    &.changeText {
        animation: ${fadeOutTextBubbleContainer} 0.4s ease-in-out forwards;
    }
`;

const fadeInScoreComponenet = keyframes`
  0% {
    opacity: 0;
    visibility: visible;
    transform: translateY(10px);
  }
  100% {
    opacity: 1;
    visibility: visible;
    transform: translateY(0px);
  }
`;

const ScoreComponenet = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 32.9px;
    width: 228.8px;
    margin-top: 6.4px;
    visibility: hidden;
    @media only screen and (min-width: 375px) {
        height: 40px;
        width: 286px;
        margin-top: 9.5px;
    }
    &.changeText {
        animation: ${fadeInScoreComponenet} 0.4s ease-in-out 0.45s forwards;
    }
`;

const ScoreImage = styled.div`
    height: 24px;
    width: 24px;
    margin-right: 3.2px;
    @media only screen and (min-width: 375px) {
        height: 30px;
        width: 30px;
        margin-right: 4px;
    }
`;

const ScoreText = styled.div`
    color: var(--Gray-Scale-Gray900, #1c1c1e);
    text-align: center;
    font-family: Pretendard;
    font-size: 12.8px;
    line-height: 12.8px;
    font-style: normal;
    font-weight: 500;
    letter-spacing: -0.4px;
    @media only screen and (min-width: 375px) {
        font-size: 16px;
        line-height: 16px;
    }
`;

const ScoreNum = styled.div`
    color: var(--Semantic-Colors-Blue, #007aff);
    text-align: center;
    font-family: Pretendard;
    font-size: 12.8px;
    line-height: 12.8px;
    font-style: normal;
    font-weight: 500;
    letter-spacing: -0.4px;
    @media only screen and (min-width: 375px) {
        font-size: 16px;
        line-height: 16px;
    }
`;

const CenterContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100vw;
    height: 342px;
    @media only screen and (min-width: 375px) {
        height: 458px;
    }
    @media only screen and (min-width: 429px) {
        height: 483px;
    }
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
    width: 204px;
    height: 300px;
    transform-style: preserve-3d;
    transition: transform 0.6s;
    animation: ${fadeInCardImageComponet} 0.6s ease-in-out 0.6s forwards;
    opacity: 0;
    transform: translateY(40px);
    @media only screen and (min-width: 375px) {
        width: 272px;
        height: 400px;
    }
    @media only screen and (min-width: 429px) {
        width: 289px;
        height: 425px;
    }
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
    padding: 0px 20px 0px 22px;
    width: 162px;
    height: 252px;
    display: flex;
    flex-direction: column;
    @media only screen and (min-width: 375px) {
        padding: 0px 28px 0px 32px;
        width: 212px;
        height: 312px;
    }
    @media only screen and (min-width: 429px) {
        padding: 0px 30px 0px 34px;
        width: 225px;
        height: 333px;
    }
`;

const CardTitle = styled.div`
    color: var(--Gray-Scale-Gray800, #3a3a3c);
    font-family: Galmuri9;
    font-size: 20px;
    margin-bottom: 10px;
    letter-spacing: -0.44px;
    font-style: normal;
    font-weight: 400;
    line-height: 120%; /* 33.6px */

    @media only screen and (min-width: 375px) {
        font-size: 28px;
        margin-bottom: 19.4px;
        letter-spacing: -0.56px;
    }
    @media only screen and (min-width: 429px) {
        font-size: 30px;
        letter-spacing: -0.6px;
        margin-bottom: 20px;
    }
`;

const CardContext = styled.div`
    color: var(--Gray-Scale-Gray800, #3a3a3c);
    font-family: Pretendard;
    font-size: 13px;
    line-height: 20px;
    letter-spacing: -0.3px;
    font-style: normal;
    font-weight: 400;
    @media only screen and (min-width: 375px) {
        font-size: 16px;
        line-height: 162.5%; /* 26px */
        letter-spacing: -0.4px;
    }
    @media only screen and (min-width: 429px) {
        font-size: 17px;
        line-height: 28px;
        letter-spacing: -0.4px;
    }
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
    color: #ffffff;
    text-align: center;
    font-family: PretendardBold;
    font-size: 20px;
    line-height: 30px;
    font-style: normal;
    font-weight: 700;
    letter-spacing: -0.4px;
    animation: ${fadeInBottomText} 0.6s ease-in-out 1.2s forwards;
    opacity: 0;
    transform: translateY(50px) scale(0.7);
    @media only screen and (min-width: 375px) {
        font-size: 24px;
        line-height: 34px; /* 100% */
    }
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
    position: absolute;
    bottom: 0px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    animation: ${fadeInButtonComponent} 0.45s ease-in-out 2.25s forwards;
    transform: translateY(90px);
    @media only screen and (min-width: 375px) {
        bottom: 16px;
    }
`;

const CTAButton = styled.div`
    height: 36px;
    width: 100vw;
    font-size: 16px;
    line-height: 16px;
    color: var(--Gray-Scale-White, #fff);
    background-color: #1c1c1e;
    text-align: center;
    font-family: Pretendard;
    font-style: normal;
    font-weight: 500;
    letter-spacing: -0.4px;
    padding-top: 20px;
    @media only screen and (min-width: 375px) {
        height: 36px;
        width: 343px;
        font-size: 16px;
        line-height: 16px;
        background-image: url(${CTA_button});
        background-size: cover;
        background-color:transparent;
    }
`;

function CardComponent(props: { onClickButton: () => void }) {
    const [flipped, setFlipped] = useState('');
    const [clicked, setClicked] = useState('');
    const [changeText, setChangeText] = useState('');
    const [url, setUrl] = useState('');
    const [scoreNumber, setScoreNumber] = useState('100');
    const [scoreRangeText, setScoreRangeText] = useState(['운 만땅!', '_lovely']);
    const [fortuneCategory, setFortuneCategory] = useState('건강');
    const [fortuneData, setFortuneData] = useState<any>({
        data: { id: 1, category: 'HEALTH', score: 100, description: '' },
    });

    function preloading(imageUrls: string[]) {
        imageUrls.forEach((url) => {
            const image = new Image();
            image.src = url;
        });
    }

    function setScoreText(score: number) {
        if (score === 100) {
            setScoreRangeText(['운 만땅!', '_lovely']);
        } else if (score > 85) {
            setScoreRangeText(['운 상승', '_joy']);
        } else if (score > 69) {
            setScoreRangeText(['운 안정', '_smile']);
        } else if (score > 49) {
            setScoreRangeText(['운 보통', '_default']);
        } else {
            setScoreRangeText(['운 상태 미확인', '_default']);
        }
    }

    function setCategortText(category: string) {
        if (category === 'FRIENDSHIP') {
            setFortuneCategory('우정');
        } else if (category === 'HAPPINESS') {
            setFortuneCategory('행복');
        } else if (category === 'HEALTH') {
            setFortuneCategory('건강');
        } else if (category === 'LIFE') {
            setFortuneCategory('갓생');
        } else if (category === 'LOVE') {
            setFortuneCategory('연애');
        } else if (category === 'MONEY') {
            setFortuneCategory('금전');
        } else if (category === 'STUDY') {
            setFortuneCategory('공부');
        } else {
            setFortuneCategory('');
        }
    }

    const fetchData = async (id: string, score: string) => {
        try {
            const response = await instance.get('/api/v1/fortunes/' + id, {
                withCredentials: true,
            });
            setFortuneData(response.data);
            setScoreText(Number(score));
            setScoreNumber(score);
            setCategortText(response.data.data.category);
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
        setChangeText('changeText');
        if (!flipped || flipped === 'unFlipped') {
            setFlipped('flipped');
        } else {
            setFlipped('unFlipped');
        }
    };

    useEffect(() => {
        const queryParams = new URLSearchParams(window.location.search);
        setUrl(queryParams.get('imageUrl') || '');
        fetchData(queryParams.get('fortuneId') || '1', queryParams.get('fortuneScore') || '100');
        preloading([url, HEALTH_card]);
    }, []);

    return (
        <FadeOutContainer className={clicked}>
            <TopComponent $height={window.innerHeight - 72}>
                <BubbleComponent>
                    <TextBubble>
                        <TextBubbleContainer className={changeText}>뒤집어서 운세를 확인해주세요~</TextBubbleContainer>
                        <ScoreComponenet className={changeText}>
                            <ScoreImage>
                                <Lottie
                                    animationData={require('../image/' + fortuneData.data.category + scoreRangeText[1])}
                                />
                            </ScoreImage>
                            <ScoreText>오늘의 행운 지수는&nbsp;</ScoreText>
                            <ScoreNum>{scoreNumber}</ScoreNum>
                            <ScoreText>!</ScoreText>
                        </ScoreComponenet>
                    </TextBubble>
                </BubbleComponent>
                <CenterContainer>
                    <CardContainer>
                        <CardImageComponet className={flipped} onClick={handleCardClick}>
                            {url === '' ? <CardFrontDefault /> : <CardFront url={url} />}
                            <CardBack>
                                <CardText>
                                    <CardTitle>
                                        {fortuneCategory}
                                        {scoreRangeText[0]}
                                    </CardTitle>
                                    <CardContext>{fortuneData.data.description}</CardContext>
                                </CardText>
                            </CardBack>
                        </CardImageComponet>
                    </CardContainer>
                    <BottomText>{fortuneCategory} 부적</BottomText>
                </CenterContainer>
            </TopComponent>
            <ButtonComponent>
                <CTAButton onClick={onClickButtonFunc}>나도 부적 뽑기</CTAButton>
            </ButtonComponent>
        </FadeOutContainer>
    );
}
export default CardComponent;
