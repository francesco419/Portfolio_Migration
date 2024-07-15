import styled from "styled-components";

const TitleWrapper = styled.div`
    line-height: ${(props) => props.$lineHeight}rem;
    font-size: ${(props) => props.$size}rem;
    font-weight: ${(props) => props.$fontWeight};
    margin: ${(props) => (props.$margin ? "40px 0" : "0")};
`;

export default TitleWrapper;
