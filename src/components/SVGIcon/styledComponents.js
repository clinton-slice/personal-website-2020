import styled, { keyframes } from "styled-components";

const svgAnimate = keyframes`
10%, 90% {
  transform: translate3d(-2px, 0, 0);
}

20%, 80% {
  transform: translate3d(4px, 0, 0);
}

30%, 50%, 70% {
  transform: translate3d(-8px, 0, 0);
}

40%, 60% {
  transform: translate3d(8px, 0, 0);
}
`;

export const SocialIconLink = styled.a`
  color: ${({ color, theme }) => color || theme.color};
  margin: 0px 20px;
`;

export const SVG = styled.svg`
  width: 2.8rem;
  height: 2.8rem;
  &:hover,
  &:active,
  &:focus {
    animation: ${svgAnimate} 0.82s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
    transform: translate3d(0, 0, 0);
    backface-visibility: hidden;
    perspective: 1000px;
  }
  & .social-group__outline {
    transform-origin: 50% 50%;
    transform: scale(1.1);
  }
  @media (max-width: 768px) {
    width: 2.8rem;
    height: 2.8rem;
  }
`;