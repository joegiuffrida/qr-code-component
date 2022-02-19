import Head from 'next/head';
import Image from 'next/image';
import styled from 'styled-components';

export default function Home() {
  return (
    <Wrapper>
      <CardContainer>
        <div>QR Box</div>
        <Title>Improve your front-end skills by building projects</Title>
        <p>
          Scan the QR code to visit Frontend Mentor and take your coding skills
          to the next level
        </p>
      </CardContainer>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--color-lightGray);
  height: 100vh;
`;

const CardContainer = styled.div`
  max-width: 350px;
  background-color: var(--color-white);
  padding: 15px;
  height: fit-content;
`;

const Title = styled.h2`
  color: var(--color-darkBlue);
  font-size: 1.5rem;
  text-align: center;
  padding: 10px 10px;
`;
