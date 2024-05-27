import { useRef, useState } from 'react';
import DropDownBtn from '../button/dropdownBtn';
import ReactMarkdown from 'react-markdown';
import '../button/test.css';

export default function ListContainer({ data }) {
  const [isClick, setIsClick] = useState(false);
  const [imgCode, setImgCode] = useState(true);
  const refaa = useRef();

  const isClickHandler = () => {
    /*     if (!isClick) {
      refaa.current.style.maxHeight = '2000px';
      //expand
    } else {
      refaa.current.style.maxHeight = '0px';
      //constract
    } */
    setIsClick((isClick) => !isClick);
  };

  const imgCodeHandler = () => {
    setImgCode((imgCode) => !imgCode);
  };

  return (
    <li
      style={{
        display: 'flex',
        margin: '0 0 30px'
      }}
    >
      <DropDownBtn isClick={isClick} handler={isClickHandler} />
      <div>
        <ReactMarkdown>{data.subtitle}</ReactMarkdown>
        {data.detail !== '' && <div
          ref={refaa}
          className={isClick ? 'refal listComp' : 'refa listComp'}
        >
          {/* <Btns handler={imgCodeHandler} click={imgCode} /> */}
          <div>
            <ReactMarkdown>{data.detail}</ReactMarkdown>
          </div>
          {/* 해당부분은 각 항목에 대한 디테일 설명이다*/}
        </div>}
      </div>
    </li>
  );
}

function Btns({ click, handler }) {
  return (
    <>
      <button
        style={{
          fontWeight: click ? 'bold' : 'normal',
          color: click ? '#ff0000' : '#000'
        }}
        onClick={handler}
      >
        Code
      </button>
      <button
        style={{
          fontWeight: click ? 'normal' : 'bold',
          color: click ? '#000' : '#ff0000'
        }}
        onClick={handler}
      >
        IMG
      </button>
    </>
  );
}

//Problem 1

//max-height의 transition 효과는 100%,auto와 같은 수치에는 작동하지 않는다.
//다만 불특정 height를 위해 max-height를 높게주면 줄수록 delay를 체감할 수 있다.
//그러므로 cubic-beizer를 사용해 해당 delay의 체감을 줄여줄수 있다.
//프로젝트의 about 파트에도 비슷한 효과를 사용했지만, 특정 height를 사용했었고
//이번 파트는 불특정 height를 위해 max-height를 사용해 내부 contents의 크기(량)에 따라
//유연하게 바뀔수 있도록 하기 위함이였다.

/**
 * .refa {
  border-top: 0;
  transition: all 0.5s linear;
  overflow: hidden;
  max-height: 0;
  transition: max-height 2s cubic-bezier(0, 1, 0, 1);
}

.refal {
  border-top: 1px solid;
  transition: all 0.5s linear;
  overflow: hidden;
  max-height: 2000px;
  transition: max-height 1.5s ease-in-out;
}
 */
