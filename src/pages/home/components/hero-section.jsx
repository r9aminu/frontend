import styled from "styled-components";

export default function HeroSection() {
  return (
    <Wrapper>
      <Image src={imageURL} alt="Hero" />
    </Wrapper>
  );
}

const imageURL =
  "https://www.nydailynews.com/wp-content/uploads/migration/2023/07/05/FG2FXBJIUVE73BHN67K2YZ5FPM.jpg";

const Wrapper = styled.div`
  height: 80vh;
  width: 100%;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
`;
