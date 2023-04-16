import Header from "./components/Header/Header";
import Section from "./components/Section/Section";
import Main from "./components/Main/Main";
import Footer from "./components/Footer";
import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Tela from "./components/Footer/Tela";
import './components/Header/estilo.css'

function App() {

  const [userData, setUserData] = useState({nome: '', email: '', numero: '', senha: ''})

  return (
    <>

      <Router>


        <Routes>
          <Route path="/" element={
            <di>
              <Header />
              <Main userData = {userData} setUserData = {setUserData} />
              <Section />
              <Footer />
            </di>
          }/>
            
          
          <Route path='/Tela' element={<Tela  />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;




