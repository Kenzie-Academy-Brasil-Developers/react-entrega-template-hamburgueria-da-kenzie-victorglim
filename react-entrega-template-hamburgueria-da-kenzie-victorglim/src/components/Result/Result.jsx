import { Container } from "../Main/styles";
import {
  DivResult,
  DivFlexResult,
  TitleResult,
  ItemResult,
  CleanResult,
} from "./styles";

const Result = ({ result, setResult, className }) => {
  return (
    <Container>
      <DivResult className={className}>
        <DivFlexResult>
          <TitleResult>Resultados para:</TitleResult>
          <ItemResult>{result}</ItemResult>
        </DivFlexResult>
        <CleanResult onClick={() => setResult("")}>Limpar busca</CleanResult>
      </DivResult>
    </Container>
  );
};

export default Result;
