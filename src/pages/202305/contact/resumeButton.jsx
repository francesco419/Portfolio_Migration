import styles from './resumeButton.module.css';
import portfolio from './PortfolioPDF.pdf';

export default function ResumeButton() {
  return (
    <div className={styles['resumeButton']}>
      {/* <button onClick={onButtonClick}>download resume</button> */}
      <a
        href={portfolio}
        download='PortFolio'
        target='_blank'
        rel='noopener noreferrer'
        aria-label='download Resume'
      >
        <button>Download resume</button>
      </a>
    </div>
  );
}
