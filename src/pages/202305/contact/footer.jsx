import styles from './footer.module.css';
import Contact from './contact.jsx';
import ResumeButton from './resumeButton';
import TitleWrapper from '@components/common/titleWrapper';

export default function FooterContact({ refer }) {
  const myContact = [
    {
      letter: 'E',
      text: 'francesco419@naver.com',
      bool: true
    },
    {
      letter: 'P',
      text: 'https://leesanghyeon.com/',
      bool: false
    },
    {
      letter: 'G',
      text: 'https://github.com/francesco419',
      bool: false
    },
    {
      letter: 'V',
      text: 'https://velog.io/@francesco419',
      bool: false
    }
  ];

  return (
    <footer ref={refer} className={styles['footer']}>
      <TitleWrapper $lineHeight={1} $size={3} $fontWeight={600}>
        CONTACT
      </TitleWrapper>
      <div>
        {myContact.map((data, index) => {
          return (
            <Contact
              letter={data.letter}
              text={data.text}
              bool={data.bool}
              key={`${data.letter}_${index}`}
            />
          );
        })}
      </div>
      <ResumeButton />
    </footer>
  );
}
