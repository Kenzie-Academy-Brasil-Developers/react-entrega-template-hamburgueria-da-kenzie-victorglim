import { ContainerWallet } from "../Main/styles";
import { BoxWallet, HeaderWallet, MainWallet } from "./styles";
import Null from "../Null/Null";
import { ContainerBottomWallet } from "./styles";
import CardWallet from "../CardWallet/CardWallet";
import UlCardWallet from "../UlCardWallet/UlCardWallet";
import Total from "../Total/Total";

const Wallet = ({ filtered, setFiltered }) => {
  return (
    <ContainerWallet>
      <BoxWallet>
        <HeaderWallet>Carrinho de compras</HeaderWallet>
        <MainWallet>
          {filtered.length ? (
            <ContainerBottomWallet>
              <UlCardWallet>
                {filtered.map(lunch => (
                  <CardWallet
                    filtered={filtered}
                    setFiltered={setFiltered}
                    key={lunch.id}
                    image={lunch.img}
                    title={lunch.name}
                    value={lunch.price}
                    id={lunch.id}
                  />
                ))}
              </UlCardWallet>
              <Total filtered={filtered} setFiltered={setFiltered} />
            </ContainerBottomWallet>
          ) : (
            <Null />
          )}
        </MainWallet>
      </BoxWallet>
    </ContainerWallet>
  );
};

export default Wallet;
