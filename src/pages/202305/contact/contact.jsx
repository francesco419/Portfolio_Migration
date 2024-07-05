import styles from './contact.module.css';

export default function Contact({ letter, text, bool }) {
  const onClickHandler = async () => {
    try {
      await navigator.clipboard.writeText(text);
      alert('클립보드에 저장되었습니다');
    } catch (e) {
      alert('클립보드 저장 오류');
    }
  };
  return (
    <div className={styles['hidden-contact-list']}>
      <p>{letter}</p>
      {bool ? (
        <button onClick={onClickHandler}>{text}</button>
      ) : (
        <a href={text} aria-label='url'>
          {text}
        </a>
      )}
    </div>
  );
}
