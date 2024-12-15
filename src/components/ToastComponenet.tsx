import React from 'react';
import styled from 'styled-components';

interface ToastProps {
    message: string;
    duration?: number;
}

// 스타일 정의
const ToastContainer = styled.div`
    position: fixed;
    width: 84vw;
    bottom: 20px;
    background: #333;
    color: #fff;
    padding: 10px 3vw;
    margin: 0px 5vw;
    border-radius: 5px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
    z-index: 1000;
    opacity: 0;
    text-align: center;
    font-family: Pretendard;
    font-size: 12px;
    font-style: normal;
    font-weight: 500;
    line-height: 12px;
    letter-spacing: -0.4px;
    animation: fadeInOut 2s ease-in-out;

    @keyframes fadeInOut {
        0% {
            opacity: 0;
            transform: translateY(20px);
        }
        20% {
            opacity: 1;
            transform: translateY(0);
        }
        80% {
            opacity: 1;
            transform: translateY(0);
        }
        100% {
            opacity: 0;
            transform: translateY(20px);
        }
    }
`;

const ToastComponent: React.FC<ToastProps> = ({ message }) => {
    return message === '' ? <></> : <ToastContainer>{message}</ToastContainer>;
};

export default ToastComponent;
