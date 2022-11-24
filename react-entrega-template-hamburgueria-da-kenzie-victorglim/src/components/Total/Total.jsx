import { DivBottomWallet } from "../Wallet/styles";
import {
  DivTopHeaderBottom,
  DivBottomHeaderTop,
  TitleTopHeaderBottom,
  PriceTopHeaderBottom,
  ButtonTopHeaderBottom,
} from "./styles";

const Total = ({ filtered, setFiltered }) => {
  function removeAll() {
    setFiltered([]);
  }

  return (
    <DivBottomWallet>
      <DivTopHeaderBottom>
        <TitleTopHeaderBottom>Total</TitleTopHeaderBottom>
        <PriceTopHeaderBottom>
          {filtered
            .reduce((a, b) => {
              return b.price * 1 + a;
            }, 0)
            .toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}
        </PriceTopHeaderBottom>
      </DivTopHeaderBottom>
      <DivBottomHeaderTop>
        <ButtonTopHeaderBottom onClick={removeAll}>
          Remover todos
        </ButtonTopHeaderBottom>
      </DivBottomHeaderTop>
    </DivBottomWallet>
  );
};

export default Total;
