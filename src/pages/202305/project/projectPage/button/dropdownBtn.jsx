import './test.css';

export default function DropDownBtn({ isClick, handler }) {
  return (
    <button
      className={`${isClick ? 'on' : 'off'}`}
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignContent: 'center',
        float: 'left',
        background: 'none',
        border: '0',
        cursor: 'pointer',
        alignSelf: 'baseline',
        aspectRatio: 1
      }}
      onClick={handler}
    >
      ▶
    </button>
  );
}
