import Layout from "./components/layout/Layout"
import { Routes,Route } from "react-router-dom"
import HomePage from "./pages/HomePage"
import AccordionPage from "./pages/AccordionPage"
import { useEffect, useState } from "react"
import "./App.css";


function App() {

  const [theme,setTheme] = useState("light");

  const toggleTheme = ()=>{
    setTheme((currentState)=>currentState==="light"?"dark":"light")
  };

  useEffect(()=>{
    document.body.className = theme
  },[theme]);

  return (
    <Layout toggleTheme={toggleTheme} theme={theme}>
      <Routes>
        <Route path="/" element={<HomePage />} />  
        <Route path="/accordion" element={<AccordionPage /> } />
      </Routes>
    </Layout>
  )
}

export default App
