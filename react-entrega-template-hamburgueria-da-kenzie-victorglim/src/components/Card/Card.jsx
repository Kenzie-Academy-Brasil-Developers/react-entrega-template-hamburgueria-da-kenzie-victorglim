import { List, ImgCard, DivImage, TitleCard, SmallCard, SpanCard, ButtonCard } from "./styles";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const notify = () => {
  toast.error("Você já adicionou este item!", {
    position: "top-center",
    autoClose: 1500,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
  });
};

const Card = ({image, title, categories, value, id, list, filtered, setFiltered }) => {

  function selectItems(e) {
    const data = list.find(element => element.id * 1 === e.target.id * 1);
    const verify = filtered.filter(em => {
      return data.id * 1 === em.id * 1;
    });

    if (verify.length < 1) {
      setFiltered([...filtered, data]);
    } else {
      notify();
    }
  }

  return (
    <List>
      <DivImage>
        <ImgCard src={image} />
      </DivImage>
      <TitleCard>{title}</TitleCard>
      <SmallCard>{categories}</SmallCard>
      <SpanCard>
        {value.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}
      </SpanCard>
      <ButtonCard onClick={selectItems} id={id}>
        Adicionar
      </ButtonCard>
      <ToastContainer
        position="top-left"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </List>
  );
};

export default Card;
