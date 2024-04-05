//import logo from './logo.svg';
import './Appa.css';


import Navbar from './components/Navbar';
import TextForm  from './components/TextForm';

//let Topic="React";
//let a=10;
//let b=20;

function App() {
  return (
    <>
    <Navbar title="TextUtilZer"  aboutText="About US"></Navbar>
    {/*<Navbar></Navbar>*/}
  {/* <Navbar title='TextUtils'></Navbar>*/}
    <div className='container my-3'>
   <TextForm heading="Enter Text To Analysis "> </TextForm>

    </div>

   
    </>
   
  );
}

export default App;
