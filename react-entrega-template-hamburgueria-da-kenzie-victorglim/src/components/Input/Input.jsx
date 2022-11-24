import { StyledInput, DivStyledInput, InputButton, FormInput } from "./styles";

const Input = ({ result, setResult, empty, setEmpty }) => {
  function resetFormInput(e) {
    e.preventDefault();
  }

  function changeInput(e) {
    setResult(e.target.value);
    result.length === 0 ? setEmpty(false) : setEmpty(true);
  }

  return (
    <>
      <FormInput onSubmit={resetFormInput}>
        <DivStyledInput>
          <StyledInput
            onChange={changeInput}
            value={result}
            placeholder="Digitar Pesquisa"
          />
          <InputButton type="submit">Pesquisar</InputButton>
        </DivStyledInput>
      </FormInput>
    </>
  );
};

export default Input;
