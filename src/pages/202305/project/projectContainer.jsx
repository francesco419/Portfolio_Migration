import styles from './projectContainer.module.css';
import { myProjects } from '@context/mainProjectText.jsx';
import { lazy, Suspense } from 'react';
import { MiddleTitle } from '@components/midTitle.jsx';
import styled from 'styled-components';
import fineditionFront from '@/assets/image/projectFront/finedition.jpg';
import mindlabFront from '@/assets/image/projectFront/mindlab.webp';
import triangleFront from '@/assets/image/projectFront/triangle.png';
import personalFront from '@/assets/image/projectFront/personal.png';
import { Link } from 'react-router-dom';
import open from '@assets/svg/open.svg';
import { motion } from 'framer-motion';

const Project = lazy(() => import('./project'));

const INTRODUCTION = [
  {
    name: 'FINEDITION',
    year: '2023',
    as: 'Team-Project',
    size: true,
    to: 'FINEDITION_WORK',
    image: fineditionFront,
    period: '2 month',
    stack: 'React,TypeScript',
    addition: { transform: 'translateY(-10%)' }
  },
  {
    name: 'MINDLAB',
    year: '2023',
    as: 'Solo-Project',
    size: false,
    to: 'BrainBomb',
    image: mindlabFront,
    period: '4 month',
    stack: 'React,TypeScript'
  },
  {
    name: 'Triangle',
    year: '2023',
    as: 'Solo-Project',
    size: false,
    to: 'post_typescript_redux',
    image: triangleFront,
    period: '3 month',
    stack: 'React,TypeScript'
  },
  {
    name: 'Personal Web',
    year: '2024 ~',
    as: 'Solo-Project',
    size: false,
    to: 'MainPage',
    image: personalFront,
    period: 'On-work',
    stack: 'React,TypeScript,Vite'
  }
];

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
  &:hover .whiteLayer {
    display: flex;
  }
  border-radius: 15px;
`;

const ProjectImage = styled.img`
  object-fit: cover;
  height: auto;
  width: ${(props) => (props.$small ? '50%' : '100%')};
  border-radius: 15px;
`;

const ProjectIntro = styled.p`
  /*   font-family: 'BMDOHYEON';
  font-weight: bold;
  font-style: normal; */
  color: #fff;
  font-size: ${(props) => props.$size};
`;

const IntroPosition = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 10px;
  position: absolute;
  bottom: 5%;
  left: 2%;
  z-index: 90;
  line-height: 1;
  p {
    margin: 10px 0 0;
  }
  div {
    &:nth-child(2) {
      display: flex;
    }
  }
  span {
    margin-right: 50px;
  }
`;

const IntroParticipate = styled(ProjectIntro)`
  background: #a3a2a288;
  border-radius: 20px;
  padding: 3px 10px;
  margin: 2px 0 0;
  width: fit-content;
`;

function ProjectNew({ props }) {
  return (
    <ProjectWrapper $isHeight={props.size} to={`/project/${props.to}`}>
      <WhiteLayer />
      <IntroPosition>
        <div>
          <ProjectIntro $size='3rem'>{props.name}</ProjectIntro>
          <ProjectIntro $size='1.8rem'>{props.year}</ProjectIntro>
          <IntroParticipate $size='0.8rem'>{props.as}</IntroParticipate>
        </div>
        <div>
          <span>
            <ProjectIntro $size='1.8rem'>Period</ProjectIntro>
            <ProjectIntro $size='1rem'>{props.period}</ProjectIntro>
          </span>
          <span>
            <ProjectIntro $size='1.8rem'>Stack</ProjectIntro>
            <ProjectIntro $size='1rem'>React, TypeScript</ProjectIntro>
          </span>
        </div>
      </IntroPosition>
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
  border-radius: 0;
`;

const IntroPositionHori = styled(IntroPosition)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  top: 5%;
  p {
    color: #000;
    margin: 10px 0 0;
  }
`;

function ProjectNewHorizontal({ props }) {
  return (
    <ProjectWrapperHori $isHeight={props.size} to={`/project/${props.to}`}>
      <WhiteLayer />
      <IntroPositionHori>
        <div>
          <ProjectIntro $size='3rem'>{props.name}</ProjectIntro>
          <ProjectIntro $size='1.8rem'>{props.year}</ProjectIntro>
          <IntroParticipate $size='0.8rem'>{props.as}</IntroParticipate>
        </div>
        <div>
          <span>
            <ProjectIntro $size='1.8rem'>Period</ProjectIntro>
            <ProjectIntro $size='1rem'>{props.period}</ProjectIntro>
          </span>
          <span>
            <ProjectIntro $size='1.8rem'>Stack</ProjectIntro>
            <ProjectIntro $size='1rem'>React, TypeScript</ProjectIntro>
          </span>
        </div>
      </IntroPositionHori>
      <ProjectImage src={props.image} style={props.addition} $small />
    </ProjectWrapperHori>
  );
}

const ProjectWrapperSmall = styled(ProjectWrapper)`
  height: auto;
  box-shadow: none;
  padding: 0 0 20px;
  box-sizing: border-box;
  border-bottom: 1px solid #a3a2a2;
  border-radius: 0;

  p {
    color: #000;
  }
`;

const LinkLayer = styled.div`
  position: absolute;
  display: none;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  z-index: 99;
`;

const LinkImage = styled.img`
  width: 70px;
  height: 70px;
  border-radius: 50%;
  background-color: #00000022;
`;

function WhiteLayer() {
  return (
    <LinkLayer className='whiteLayer'>
      <LinkImage src={open} alt='open' loading='lazy' />
    </LinkLayer>
  );
}

function ProjectNewSmall({ props }) {
  return (
    <ProjectWrapperSmall $isHeight={props.size} to={`/project/${props.to}`}>
      <WhiteLayer />
      <ProjectImage src={props.image} style={props.addition} />
      <span
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          marginRight: '30px'
        }}
      >
        <div>
          <ProjectIntro $size='3rem'>{props.name}</ProjectIntro>
          <ProjectIntro $size='1.8rem'>{props.year}</ProjectIntro>
          <IntroParticipate $size='0.8rem'>{props.as}</IntroParticipate>
        </div>
        <div style={{ display: 'flex', gap: '50px', alignItems: 'end' }}>
          <span>
            <ProjectIntro $size='1.8rem'>Period</ProjectIntro>
            <ProjectIntro $size='1rem'>{props.period}</ProjectIntro>
          </span>
          <span>
            <ProjectIntro $size='1.8rem'>Stack</ProjectIntro>
            <ProjectIntro $size='1rem'>React, TypeScript</ProjectIntro>
          </span>
        </div>
      </span>
    </ProjectWrapperSmall>
  );
}

const Grid = styled.div`
  display: grid;
  grid-template-rows: repeat(3, minmax(300px, auto));
  grid-template-columns: 1fr 1fr;
  column-gap: 10px;
  row-gap: 40px;

  a {
    &:nth-child(1) {
      grid-column: 1/3;
    }
    &:nth-child(2) {
      grid-column: 1/3;
    }
  }
`;

export default function ProjectContainer({ forwardRef }) {
  return (
    <div
      ref={forwardRef}
      className={styles['projectContainer']}
      title='click_to_see_project_detail'
    >
      <MiddleTitle title={'PROJECT'} />
      <div style={{ height: '40px' }}></div>
      {/* <div className={styles['projectContainer-innerbox']}>
        {myProjects.map((data, index) => {
          return (
            <Suspense key={`project_${index}_sus`}>
              <Project projects={data} num={index} key={`project_${index}`} />
            </Suspense>
          );
        })}
      </div> */}
      <Grid>
        <ProjectNew props={INTRODUCTION[0]} />
        <ProjectNewHorizontal props={INTRODUCTION[1]} />
        <ProjectNewSmall props={INTRODUCTION[2]} />
        <ProjectNewSmall props={INTRODUCTION[3]} />
      </Grid>
    </div>
  );
}
