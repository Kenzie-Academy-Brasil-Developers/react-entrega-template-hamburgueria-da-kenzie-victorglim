import { DivEmpty, ImageEmpty, TitleEmpty } from "./styles";

const EmptyCard = () => {
  return (
    <DivEmpty>
      <ImageEmpty src="./s.jpg" />
      <TitleEmpty>Não há produto disponível no momento :(</TitleEmpty>
    </DivEmpty>
  );
};

export default EmptyCard;
