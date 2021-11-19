import Header from "./components/Header/Header";
import Invoices from "./components/Invoices/Invoices";
import NewInvoiceForm from "./components/NewInvoiceForm/NewInvoiceForm";
import data from './data';

function App() {
  return (
  <div className='container'>
      <Header />
      <NewInvoiceForm />
      <Invoices data={data}/>
  </div>
  );
}

export default App;
