import { useState } from "react";
import About from "./componets/About";
import Alert from "./componets/Alert";
import Navbar from "./componets/Navbar";
import Textform from "./componets/Textform";
function App() {
  
  // creating alert as variable and now my alert is given to alert component and then in alert we are calling
  const [alert,setAlert]=useState(null);//some time due to null we get error so put prop.name && to after div of our component is define 

  // creating a methode wich create alert
    const showAlert=(msg,type)=>
  {
      // setalert is used to assign value to created variable 
      setAlert(
        // passing object as given
          {
              messeage:msg,
              type:type
          }
      )
      setTimeout(()=>{
       setAlert(null);
      },2000)
  }

  // you can change the color of body so you don't go have to change particular component one by one 
  // document.body.style.backgroundColor='white' 
 
  const [modevalue,setdarkmode]=useState('light');//dark mode is enable or not
  const [modtext,setModText]=useState("Enable dark mode");
  const changemode=()=>{
    if(modevalue==="light")
    {
      setdarkmode('dark');
      setModText("Enable light mode");
      showAlert("Dark mode is enable","success");
      // document.body.style.backgroundColor='black' 

      // changing title of web page after the favicon
      document.title="Text-Util-Dark-mode";
    }
    else
    {
      setdarkmode('light');
      setModText("Enable dark mode");
      showAlert("Light mode is enable","success");
      // document.body.style.backgroundColor='white' 
      document.title="Text-Util-Light-mode";
    }
  }
  return (
  <>
   <Navbar title="TextEditors" about="About" mode={modevalue} toggleMode={changemode} modtext={modtext}></Navbar>
   <Alert alert={alert}></Alert>
   <Textform mode={modevalue} showAlert={showAlert}></Textform>
   <About/>
  </>
 
  );
}
export default App;
