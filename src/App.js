import axios from "axios";

import  { useEffect, useState } from "react";
import './App.css';
import Container from '@mui/material/Container'
import Header from "./Components/Header";
import Definitions from "./Components/Definitions/Definitions";
function App() {
  const [meanings, setmeanings] = useState([]);
  const [word, setword] = useState("");
  const [category, setcategory] = useState("")
const dictionaryApi = async()=>{
  try{
const data = await axios.get(`https://api.dictionaryapi.dev/api/v2/entries/${category}/${word}`);
setmeanings(data.data);

}
catch(err) {
 
}
}
useEffect(() => {
  dictionaryApi();
}, [ word , category ])

return (
  <>
  <div className="App" style ={{backgroundColor:'#141618',height :'100vh' , color:'white'}}>

  <Container   style ={{display:'flex'  ,flexDirection:'column', height:'100vh'} } >
  <Header  category={category} setcategory={setcategory} word={word} setword={setword}/>
  
       <Definitions word = {word} meanings = {meanings} category = {category} />
  
  </Container>
  
  </div>
  </>

  );
}

export default App;
