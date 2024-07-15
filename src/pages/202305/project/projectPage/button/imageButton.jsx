import styled from "styled-components";

const ImageButton = styled.button`
    position: absolute;
    top: 50%;
    left: ${(props) => props.$left && "0"};
    right: ${(props) => !props.$left && "0"};
    transform: translateY(-50%);
    display: flex;
    justify-content: space-between;
    z-index: ${(props) => (props.$zIndex ? props.$zIndex : "90")};
    border: 0;
    width: 50px;
    height: 100px;
    background-color: #00000020;
    cursor: pointer;
    color: white;
`;

export default ImageButton;
/* 
left: ${(props) => (props.$left ? 0 : 'auto')};
  right: ${(props) => (props.$right ? 0 : 'auto')}; */
