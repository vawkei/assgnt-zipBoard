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

/*📒👇 Had to rework it due to the flashings upon refresh previous code 📒👇*/
  // useEffect(()=>{
  //   const savedThemee= localStorage.getItem("theme");
  //   if(savedThemee){
  //     setTheme(savedThemee)
  //   }
  // },[]);

  // useEffect(()=>{
  //   document.body.className = theme;
  //   localStorage.setItem("theme",theme);
  // },[theme]);
/*📒 Had to rework it due to the flashings upon refresh previous code 📒*/

  useEffect(() => {
  const savedTheme = localStorage.getItem("theme") || "light";
  setTheme(savedTheme);
  document.documentElement.setAttribute("data-theme", savedTheme);
}, []);

useEffect(() => {
  document.documentElement.setAttribute("data-theme", theme);
  localStorage.setItem("theme", theme);
}, [theme]);




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
