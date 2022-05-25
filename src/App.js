import axios from "axios";

import  { useEffect, useState } from "react";
import './App.css';
import Container from '@mui/material/Container'
import Header from "./Components/Header";
import Definitions from "./Components/Definitions/Definitions";
function App() {
  const [meanings, setmeanings] = useState([]);
  const [word, setword] = useState("");

const dictionaryApi = async()=>{

const data = await axios.get(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
setmeanings(data.data);


}
useEffect(() => {
  dictionaryApi();
}, [ word  ])

return (
  <>
  <div className="App" style ={{backgroundColor:'#141618',height :'100vh' , color:'white'}}>

  <Container   style ={{display:'flex'  ,flexDirection:'column', height:'100vh'} } >
  <Header   word={word} setword={setword}/>
  
       <Definitions word = {word} meanings = {meanings}  />
  
  </Container>
  
  </div>
  </>

  );
}

export default App;
