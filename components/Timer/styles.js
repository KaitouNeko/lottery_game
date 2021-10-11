import styled from 'styled-components'

const TimerWrapper = styled.div`
font-size: ${({ theme }) => theme.colors.timer.fontSize};
font-weight: ${({ theme }) => theme.colors.timer.fontWeight};
color: ${({ theme }) => theme.colors.timer.text};
text-shadow: ${({ theme }) => theme.colors.timer.textShadow};

`;

const TimerArea = styled.div`
display: inline-block;
min-width: 3.2em;
width: 100%;
@media (min-width: 768px) {
    width: 3.2em;
  }
`;

const TimerTip = styled.span`
display: block;
color: ${({ theme }) => theme.colors.timer.tipText};
font-size: ${({ theme }) => theme.colors.timer.tipFontSize};
font-weight: ${({ theme }) => theme.colors.timer.tipFontWeight};
`;

export { TimerWrapper, TimerTip, TimerArea }
