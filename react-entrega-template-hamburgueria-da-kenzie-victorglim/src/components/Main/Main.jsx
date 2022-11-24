import { Container, StyledMain, Ul } from "./styles";

const Main = ({ children }) => {
  return (
    <Container>
      <StyledMain>
        <Ul>{children}</Ul>
      </StyledMain>
    </Container>
  );
};

export default Main;
