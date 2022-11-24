import {
  LiWallet,
  DivImgWallet,
  ImgWallet,
  DivMainWallet,
  TitleMainWallet,
  SpanMainWallet,
  DivRemoveWallet,
  BtnRemoveWallet,
} from "./styles";

const CardWallet = ({ image, title, value, id, setFiltered, filtered }) => {
  function removeList(e) {
    e.target.parentNode.parentNode.classList.add("reversed");
    e.target.classList.add("reversed");

    setTimeout(() => {
      setFiltered(
        filtered.filter(element => e.target.id * 1 !== element.id * 1)
      );
    }, 400);
  }

  return (
    <LiWallet>
      <DivImgWallet>
        <ImgWallet src={image} />
      </DivImgWallet>
      <DivMainWallet>
        <TitleMainWallet>{title}</TitleMainWallet>
        <SpanMainWallet>
          {value.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
          })}
        </SpanMainWallet>
      </DivMainWallet>
      <DivRemoveWallet>
        <BtnRemoveWallet onClick={removeList} id={id}>
          Remover
        </BtnRemoveWallet>
      </DivRemoveWallet>
    </LiWallet>
  );
};

export default CardWallet;
