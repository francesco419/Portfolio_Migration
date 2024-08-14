import styled from 'styled-components';

const ProjectName = styled.h1`
  font-size: 4rem;
`;

const ProjectText = styled.p`
  font-size: ${(props) => props.$size}rem;
  color: ${(props) => props.$color};
  font-weight: ${(props) => props.$bold && 'bold'};
`;

const FlexBox = styled.div`
  display: flex;
  gap: 50px;
  margin: 0 0 20px;
  P {
    &:first-child {
      width: 150px;
    }
  }
`;

export function ProjectList({ props }) {
  return (
    <FlexBox>
      <ProjectText $size={1.3} $color='#a3a2a2' $bold>
        {props.item}
      </ProjectText>
      <ProjectText $size={1.3} $bold>
        {props.itemName}
      </ProjectText>
    </FlexBox>
  );
}

export default function ProjectMain() {
  return (
    <div>
      <ProjectName>Project 6 : Finedition</ProjectName>
      <ProjectList
        props={{ item: 'Participant', itemName: '개발자 1명, 기획/디자인 1명' }}
      />
      <ProjectList
        props={{
          item: 'Date / Period',
          itemName: '개발자 1명, 기획/디자인 1명'
        }}
      />
      <ProjectList
        props={{ item: 'Participant', itemName: '개발자 1명, 기획/디자인 1명' }}
      />
    </div>
  );
}

//1rem = 작다
//1.5 = 일반치고는 큰
//2 = 소제목
//

/**
 * participant
 * Date / period
 * Skill Stack
 */

/**
 * info
 * learn
 * image
 */
