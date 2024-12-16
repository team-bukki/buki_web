import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import Lottie from 'lottie-react';
import WaveTextComponent from './WaveTextComponent';
import ToastComponent from './ToastComponenet';
import { instance } from '../instance';
import text_bubble from '../image/text_bubble.png';
import back_card from '../image/back_card.png';
import CTA_button from '../image/CTA_button.png';
import crystalball from '../image/crystalball.json';

const TopComponent = styled.div<{ $height: number }>`
    @media only screen and (min-width: 375px) {
        position: relative;
        height: ${(props) => props.$height}px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
`;

const fadeOutContainerAnimation = keyframes`
  0% {
    opacity: 1
  }
  100% {
    opacity: 0
  }
`;

const LottieContainer = styled.div`
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
    animation: ${fadeOutContainerAnimation} 0.2s ease 4s forwards;
`;

const LottieComponent = styled.div`
    @media only screen and (max-width: 375px) {
        width: 245px;
        height: 309px;
    }
    width: 275px;
    height: 365px;
`;

const LottieFix = styled.div`
    @media only screen and (max-width: 375px) {
        width: 245px;
        height: 245px;
    }
    width: 275px;
    height: 275px;
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
        position: absolute;
        top: 16px;
        margin-bottom: 0px;
    }
    margin-bottom: 16px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    animation: ${fadeInBubbleComponent} 0.45s ease-in-out 5.8s forwards, ${shake} 1s ease-in-out 6.25s infinite;
    opacity: 0;
    transform: translateY(10px);
`;

const TextBubble = styled.div`
    @media only screen and (max-width: 375px) {
        height: 53px;
        width: 228.8px;
        font-size: 12.8px;
        line-height: 12.8px;
    }
    background-image: url(${text_bubble});
    background-size: cover;
    height: 66px;
    width: 286px;
`;

const fadeOutTextBubbleContainer = keyframes`
  0% {
    opacity: 1;
    transform: translateY(0px);
  }
  100% {
    opacity: 0;
    transform: translateY(10px);
    display: none
  }
`;

const TextBubbleContainer = styled.div`
    @media only screen and (max-width: 375px) {
        height: 32.9px;
        width: 228.8px;
        font-size: 12.8px;
        line-height: 12.8px;
        margin-top: 6.4px;
    }
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 9.5px;
    height: 40px;
    width: 286px;
    color: var(--Gray-Scale-Gray900, #1c1c1e);
    text-align: center;
    font-family: Pretendard;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 16px;
    letter-spacing: -0.4px;
    &.changeText {
        animation: ${fadeOutTextBubbleContainer} 0.6s ease-in-out forwards;
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
    @media only screen and (max-width: 375px) {
        height: 32.9px;
        width: 228.8px;
        font-size: 12.8px;
        line-height: 12.8px;
        margin-top: 6.4px;
    }
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 9.5px;
    height: 40px;
    width: 286px;
    visibility: hidden;
    &.changeText {
        animation: ${fadeInScoreComponenet} 0.6s ease-in-out 0.65s forwards;
    }
`;

const ScoreImage = styled.div`
    @media only screen and (max-width: 375px) {
        height: 24px;
        width: 24px;
        margin-right: 3.2px;
    }
    height: 30px;
    width: 30px;
    margin-right: 4px;
`;

const ScoreText = styled.div`
    @media only screen and (max-width: 375px) {
        font-size: 12.8px;
        line-height: 12.8px;
    }
    color: var(--Gray-Scale-Gray900, #1c1c1e);
    text-align: center;
    font-family: Pretendard;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 16px;
    letter-spacing: -0.4px;
`;

const ScoreNum = styled.div`
    @media only screen and (max-width: 375px) {
        font-size: 12.8px;
        line-height: 12.8px;
    }
    color: var(--Semantic-Colors-Blue, #007aff);
    text-align: center;
    font-family: Pretendard;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 16px;
    letter-spacing: -0.4px;
`;
const CenterContainer = styled.div`
    @media only screen and (max-width: 429px) {
        height: 458px;
    }
    @media only screen and (max-width: 375px) {
        position: absolute;
        height: 342px;
        top: 78.8px;
    }
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100vw;
    height: 483px;
    &.hidden {
        display: none;
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
    @media only screen and (max-width: 589px) {
        width: 289px;
        height: 425px;
    }
    @media only screen and (max-width: 429px) {
        width: 272px;
        height: 400px;
    }
    @media only screen and (max-width: 375px) {
        width: 204px;
        height: 300px;
    }
    width: 289px;
    height: 425px;
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

const CardFront = styled.div<{ $fortunedata: any }>`
    background-image: url(image/${(props) => props.$fortunedata}_secret.png);
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
    @media only screen and (max-width: 589px) {
        padding: 0px 30px 0px 34px;
        width: 225px;
        height: 333px;
    }
    @media only screen and (max-width: 429px) {
        padding: 0px 28px 0px 32px;
        width: 212px;
        height: 312px;
    }
    @media only screen and (max-width: 375px) {
        padding: 0px 20px 0px 22px;
        width: 162px;
        height: 252px;
    }
    display: flex;
    flex-direction: column;
    padding: 0px 30px 0px 34px;
    width: 225px;
    height: 333px;
`;

const CardTitle = styled.div`
    @media only screen and (max-width: 589px) {
        font-size: 30px;
        margin-bottom: 20px;
    }
    @media only screen and (max-width: 429px) {
        font-size: 28px;
        margin-bottom: 19.4px;
        letter-spacing: -0.56px;
    }
    @media only screen and (max-width: 375px) {
        font-size: 20px;
        margin-bottom: 10px;
        letter-spacing: -0.44px;
    }
    color: var(--Gray-Scale-Gray800, #3a3a3c);
    font-family: Galmuri9;
    font-size: 30px;
    font-style: normal;
    font-weight: 400;
    line-height: 120%; /* 33.6px */
    letter-spacing: -0.6px;
    margin-bottom: 20px;
`;

const CardContext = styled.div`
    @media only screen and (max-width: 589px) {
        font-size: 17px;
        line-height: 28px;
        letter-spacing: -0.4px;
    }
    @media only screen and (max-width: 429px) {
        font-size: 16px;
        line-height: 162.5%; /* 26px */
        letter-spacing: -0.4px;
    }
    @media only screen and (max-width: 375px) {
        font-size: 13px;
        line-height: 20px;
        letter-spacing: -0.3px;
    }
    color: var(--Gray-Scale-Gray800, #3a3a3c);
    font-family: Pretendard;
    font-size: 17px;
    font-style: normal;
    font-weight: 400;
    line-height: 28px;
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
        bottom: 0px;
    }
    position: absolute;
    bottom: 16px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    animation: ${fadeInButtonComponent} 0.45s ease-in-out 6.25s forwards;
    transform: translateY(90px);
`;

const CTAButton = styled.div`
    @media only screen and (max-width: 375px) {
        height: 36px;
        width: 100vw;
        font-size: 16px;
        line-height: 16px;
        color: var(--Gray-Scale-White, #fff);
        background-image: none;
        background-color: #1c1c1e;
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

function CardComponent() {
    const [flipped, setFlipped] = useState('');
    const [isHidden, setIsHidden] = useState('hidden');
    const [changeText, setChangeText] = useState('');
    const [scoreRangeText, setScoreRangeText] = useState(['운 만땅!', '_lovely']);
    const [fortuneCategory, setFortuneCategory] = useState('건강');
    const [fortuneData, setFortuneData] = useState<any>({
        data: { id: 1, category: 'HEALTH', score: 100, description: '' },
    });
    const [toasts, setToasts] = useState<string>('');

    function preloading(imageUrl: string) {
        const image = new Image();
        image.src = imageUrl;
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

    const fetchData = async () => {
        try {
            const response = await instance.get<any>('/api/v1/fortunes/web', {
                withCredentials: true,
            });
            setFortuneData(response.data);
            if (response.data.data.category) {
                preloading('image/' + response.data.data.category + '_secret.png');
            }
            setScoreText(Number(response.data.data.score));
            setCategortText(response.data.data.category);
            return response.data;
        } catch (error) {
            console.error('Error fetching data:', error);
            throw error;
        }
    };

    const redireactApp = () => {
        exeDeepLink();
    };

    const redirectStore = () => {
        const url = 'https://apps.apple.com/app/id6478649071';
        window.location.href = url;
    };

    function exeDeepLink() {
        const userAgent = navigator.userAgent.toLowerCase();
        if (userAgent.search('iphone') > -1 || userAgent.search('ipad') > -1 || userAgent.search('ipot') > -1) {
            const url = 'coin.buki://';
            window.location.href = url;
            setTimeout(() => {
                redirectStore();
            }, 500);
        } else if (toasts === '') {
            setToasts('아직 지원하지 않는 OS에요\n조금만 기다려주세요!');
            setTimeout(() => {
                setToasts('');
            }, 2500);
        }
    }

    useEffect(() => {
        fetchData();
        setTimeout(() => setIsHidden(''), 4600);
    }, []);

    const handleCardClick = () => {
        setChangeText('changeText');
        if (!flipped || flipped === 'unFlipped') {
            setFlipped('flipped');
        } else {
            setFlipped('unFlipped');
        }
    };

    return (
        <>
            <LottieContainer>
                <LottieComponent>
                    <LottieFix>
                        <Lottie animationData={crystalball} />
                    </LottieFix>
                    <WaveTextComponent text="두근두근...enter무슨 부적이 나올까?" />
                </LottieComponent>
            </LottieContainer>
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
                            <ScoreNum>{fortuneData.data.score}</ScoreNum>
                            <ScoreText>!</ScoreText>
                        </ScoreComponenet>
                    </TextBubble>
                </BubbleComponent>

                <CenterContainer className={isHidden}>
                    <CardContainer>
                        <CardImageComponet className={flipped} onClick={handleCardClick}>
                            <CardFront $fortunedata={fortuneData.data.category} />
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
                    <BottomText>알 수 없는 부적 획득</BottomText>
                </CenterContainer>
            </TopComponent>
            <ButtonComponent>
                <CTAButton onClick={redireactApp}>앱 다운받고 부적 확인하기</CTAButton>
            </ButtonComponent>
            <ToastComponent message={toasts} />
        </>
    );
}

export default CardComponent;
