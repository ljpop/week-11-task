import Header from "./components/Header";
import Invoices from "./components/Invoices";
import data from './data';

function App() {
  return (
  <div className='container'>
      <Header />
      <Invoices data={data}/>
  </div>
  );
}

export default App;
