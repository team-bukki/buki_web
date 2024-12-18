import React from 'react';
import styled, { keyframes } from 'styled-components';

const waveAnimation = keyframes`
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-3px);
  }
`;

const WaveWrapper = styled.div`
    display: inline-block;
    overflow: hidden;
    white-space: pre-line; /* 줄바꿈 지원 */
    text-align: center; /* 중앙 정렬 */
`;

const WaveLine = styled.div`
    width: 245px;
    height: 32px;
    font-size: 22px;
    line-height: 32px;
    color: #ffffff;
    text-align: center;
    font-family: PretendardBold;
    font-style: normal;
    font-weight: 700;
    letter-spacing: -0.4px;
    @media only screen and (min-width: 375px) {
        width: 275px;
        height: 40px;
        font-size: 24px;
        line-height: 34px;
    }
`;

const WaveChar = styled.span<{ $index: number }>`
    display: inline-block;
    transform-origin: bottom center;
    animation: ${waveAnimation} 1.2s ease-in-out infinite;
    animation-delay: ${({ $index }) => `${$index * 0.1}s`};
`;

interface WaveTextProps {
    text: string;
}

const WaveTextComponent: React.FC<WaveTextProps> = ({ text }) => {
    return (
        <WaveWrapper>
            {text.split('enter').map((line, lineIndex) => (
                <WaveLine key={lineIndex}>
                    {line.split('').map((char, charIndex) => (
                        <WaveChar key={`${lineIndex}-${charIndex}`} $index={charIndex}>
                            {char === ' ' ? '\u00A0' : char}
                        </WaveChar>
                    ))}
                    {lineIndex < text.split('\n').length - 1 && <br />}
                </WaveLine>
            ))}
        </WaveWrapper>
    );
};

export default WaveTextComponent;
