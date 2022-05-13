
import './App.css';
import User from './componets/userTable';
import Head from './componets/head';
function App() {
  const title="User Title";
  
  return (
    <div>
      {/* here all the attribute is passed to the head component IN this exp T is pass  */}
      <Head t={title}></Head>
      <User ></User>
    </div>
  );
}

export default App;
