import Head from 'next/head';
import Image from 'next/image';
import styled from 'styled-components';

export default function Home() {
  return (
    <Wrapper>
      <Head>
        <link
          rel="shortcut icon"
          href="favicon-32x32.png"
          type="image/x-icon"
        />
      </Head>
      <CardContainer>
        <CodeBox>
          <img src="image-qr-code.png" />
        </CodeBox>
        <Title>Improve your front-end skills by building projects</Title>
        <Description>
          Scan the QR code to visit Frontend Mentor and take your coding skills
          to the next level
        </Description>
      </CardContainer>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--color-lightGray);
  min-height: 100vh;
`;

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 350px;
  min-width: 240px;
  background-color: var(--color-white);
  padding: 18px 0;
  height: fit-content;
  border-radius: 15px;
`;

const CodeBox = styled.div`
  display: flex;
  width: 90%;

  img {
    max-width: 100%;
    border-radius: 15px;
  }
`;

const Title = styled.h2`
  color: var(--color-darkBlue);
  font-size: 1.5rem;
  text-align: center;
  width: 90%;
  margin-top: 25px;
  margin-bottom: 15px;
  line-height: 2rem;
`;

const Description = styled.p`
  color: var(--color-grayishBlue);
  width: 80%;
  text-align: center;
  margin-bottom: 25px;
  line-height: 1.25rem;
`;
