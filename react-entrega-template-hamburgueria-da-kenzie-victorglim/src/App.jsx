import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Card from "./components/Card/Card";
import Wallet from "./components/Wallet/Wallet";
import GlobalStyle from "./styles/global";
import { Flex } from "./components/Main/styles";
import { useEffect } from "react";
import { api } from "./services/api";
import { useState } from "react";
import Result from "./components/Result/Result";
import EmptyCard from "./components/EmptyCard/EmptyCard";
import { motion } from "framer-motion";


function App() {
  const [filtered, setFiltered] = useState([])
  const [list, setLists] = useState([])
  const [result, setResult] = useState('')
  const [empty, setEmpty] = useState(false)

  const filterState = list.filter(e => e.category.toLowerCase().includes(result.toLowerCase().trim()) || e.name.toLowerCase().includes(result.toLowerCase().trim()))

  useEffect(() => {
    async function getMenu() {
      try {
        const response = await api.get("products");
        
        setLists(response.data)
        return response.data
      } catch (error) {
        console.log(error);
      }
    }

    getMenu();
  }, []);
 
  return (
    <motion.div>
      <GlobalStyle />
      <Header empty={empty} setEmpty={setEmpty} result={result} setResult={setResult}/>
      {
        result.length ? <Result setResult={setResult} result={result} /> : <></>     
      }
      
      <Flex>
        <Main>
           {
           filterState.length && !empty ? 
            
            list.map(lunch => (
              <Card setFiltered={setFiltered} filtered={filtered} list={list} key={lunch.id} id={lunch.id} image={lunch.img} title={lunch.name} categories={lunch.category} value={lunch.price} />
            )  
            )

            : filterState.length && empty ? 

            filterState.map(lunch => (
              <Card setFiltered={setFiltered} filtered={filtered} list={list} key={lunch.id} id={lunch.id} image={lunch.img} title={lunch.name} categories={lunch.category} value={lunch.price} />
            )  
            ) 
            
            : 
            
            <EmptyCard />
           }
          
        </Main>
        <Wallet setFiltered={setFiltered} filtered={filtered}/>
      </Flex>
      </motion.div>
  );
}

export default App;
