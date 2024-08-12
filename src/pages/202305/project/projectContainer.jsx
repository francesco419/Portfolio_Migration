import styles from './projectContainer.module.css';
import { myProjects } from '@context/mainProjectText.jsx';
import { lazy, Suspense } from 'react';
import { MiddleTitle } from '@components/midTitle.jsx';
import styled from 'styled-components';
import fineditionFront from '@/assets/image/projectFront/finedition.jpg';
import { Link } from 'react-router-dom';
import open from '@assets/svg/open.svg';

const Project = lazy(() => import('./project'));

const ProjectWrapper = styled(Link)`
  display: block;
  position: relative;
  width: 100%;
  overflow: hidden;
  height: ${(props) => (props.$isHeight ? '500px' : '350px')};
  box-shadow: rgba(0, 0, 0, 0.25) 0px 0.0625em 0.0625em,
    rgba(0, 0, 0, 0.25) 0px 0.125em 0.5em,
    rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset;
  transition: all 0.5s ease-in;
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
`;

const ProjectImage = styled.img`
  object-fit: cover;
  height: auto;
  width: ${(props) => (props.$small ? '50%' : '100%')};
`;

const ProjectIntro = styled.p`
  font-family: 'BMDOHYEON';
  font-weight: normal;
  font-style: normal;
  color: #fff;
  font-size: ${(props) => props.$size};
`;

const IntroPosition = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  position: absolute;
  bottom: 5%;
  left: 2%;
  z-index: 90;
  line-height: 1;
`;

const IntroParticipate = styled(ProjectIntro)`
  background: #a3a2a288;
  border-radius: 20px;
  padding: 3px 10px;
  margin: 2px 0 0;
  width: fit-content;
`;

export function ProjectNew({ props }) {
  return (
    <ProjectWrapper $isHeight={props.size.height} to={`/project/${props.to}`}>
      <IntroPosition>
        <ProjectIntro $size='3rem'>{props.name}</ProjectIntro>
        <ProjectIntro $size='1.8rem'>{props.year}</ProjectIntro>
        <IntroParticipate $size='0.8rem'>{props.as}</IntroParticipate>
      </IntroPosition>
      <img
        style={{
          position: 'absolute',
          bottom: '5%',
          right: '2%',
          zIndex: '90'
        }}
        src={open}
        alt='open'
        loading='lazy'
      />
      <ProjectImage src={props.image} style={props.addition} />
    </ProjectWrapper>
  );
}

const ProjectWrapperHori = styled(ProjectWrapper)`
  display: flex;
  justify-content: flex-end;
  border-top: 1px solid #a3a2a2;
  border-bottom: 1px solid #a3a2a2;
  box-shadow: none;
  padding: 20px 0;
  box-sizing: border-box;
`;

const IntroPositionHori = styled(IntroPosition)`
  top: 5%;
  p {
    color: #000;
  }
`;

export function ProjectNewHorizontal({ props }) {
  return (
    <ProjectWrapperHori
      $isHeight={props.size.height}
      to={`/project/${props.to}`}
    >
      <IntroPositionHori>
        <ProjectIntro $size='3rem'>{props.name}</ProjectIntro>
        <ProjectIntro $size='1.8rem'>{props.year}</ProjectIntro>
        <IntroParticipate $size='0.8rem'>{props.as}</IntroParticipate>
      </IntroPositionHori>
      <ProjectImage src={props.image} style={props.addition} $small />
    </ProjectWrapperHori>
  );
}

const introduction = [
  {
    name: 'FINEDITION',
    year: '2023',
    as: 'Team-Project',
    size: {
      height: true
    },
    to: 'FINEDITION_WORK',
    image: fineditionFront,
    addition: { transform: 'translateY(-10%)' }
  },
  {
    name: 'MINDLAB',
    year: '2023',
    as: 'Solo-Project',
    size: {
      height: false
    },
    to: 'FINEDITION_WORK',
    image: fineditionFront
  },
  {
    name: 'MINDLAB',
    year: '2023',
    as: 'Solo-Project',
    size: {
      height: false
    },
    to: 'FINEDITION_WORK',
    image: fineditionFront
  },
  {
    name: 'MINDLAB',
    year: '2023',
    as: 'Solo-Project',
    size: {
      height: false
    },
    to: 'FINEDITION_WORK',
    image: fineditionFront
  },
  {
    name: 'MINDLAB',
    year: '2023',
    as: 'Solo-Project',
    size: {
      height: false
    },
    to: 'FINEDITION_WORK',
    image: fineditionFront
  }
];

const Grid = styled.div`
  display: grid;
  grid-template-rows: repeat(4, minmax(300px, auto));
  grid-template-columns: 1fr 1fr;
  column-gap: 10px;
  row-gap: 20px;

  a {
    &:nth-child(1) {
      grid-column: 1/3;
    }
    &:nth-child(2) {
      grid-column: 1/3;
    }
    &:nth-child(3) {
      grid-column: 1/3;
    }
  }
`;

const projectMap = (o) => {
  return <ProjectNew props={o} />;
};

export default function ProjectContainer({ forwardRef }) {
  return (
    <div
      ref={forwardRef}
      className={styles['projectContainer']}
      title='click_to_see_project_detail'
    >
      <MiddleTitle title={'PROJECT'} />
      <div style={{ height: '40px' }}></div>
      <div className={styles['projectContainer-innerbox']}>
        {myProjects.map((data, index) => {
          return (
            <Suspense key={`project_${index}_sus`}>
              <Project projects={data} num={index} key={`project_${index}`} />
            </Suspense>
          );
        })}
      </div>
      {/* <Grid>
        <ProjectNew props={introduction[0]} />
        <ProjectNewHorizontal props={introduction[1]} />
        <ProjectNewHorizontal props={introduction[2]} />
        <ProjectNew props={introduction[3]} />
        <ProjectNew props={introduction[4]} />
      </Grid> */}
    </div>
  );
}
