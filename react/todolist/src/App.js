import logo from './logo.svg';
import './App.css';
import Navbar from './componets/Navbar';
import Todos from './componets/Todos'
import Footer from './componets/Footer'
function App() {
  let title="My To List"
  // here todos ka array inside that we have many objects
  let todos =[
    {
      sno:1,
      title:"Go market",
      desc:"You need to go market"
    },
    {
      sno:2,
      title:"Go market",
      desc:"You need to go market"
    },
    {
      sno:3,
      title:"Go market",
      desc:"You need to go market"
    }
  ]
  return (
    <div>
      <Navbar title={title} searchbar="false"/>
      {/* below jo variable define karte hai wo render wale me use karte hai */}
      <Todos todo={todos}/>
      <Footer/>
    </div>
  );
}

export default App;
