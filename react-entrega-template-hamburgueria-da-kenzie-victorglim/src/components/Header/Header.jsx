import { StyleHeader, DivImage, DivFlex, ContainerHeader } from "./styles";
import Input from "../Input/Input";

const Header = ({ setResult, result, empty, setEmpty }) => {
  return (
    <StyleHeader>
      <ContainerHeader>
        <DivFlex>
          <DivImage>
            <img src="./logo.png" alt="logo" />
          </DivImage>
          <Input
            empty={empty}
            setEmpty={setEmpty}
            result={result}
            setResult={setResult}
          />
        </DivFlex>
      </ContainerHeader>
    </StyleHeader>
  );
};

export default Header;
