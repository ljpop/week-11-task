import Header from "./components/Header/Header";
import Invoices from "./components/Invoices/Invoices";
import NewInvoiceForm from "./components/NewInvoiceForm/NewInvoiceForm";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import data from "./data";
import ViewInvoice from "./components/ViewInvoice/ViewInvoice";

function App() {
  return (
    <Router>
      <div className="container">
        <Header />
        <NewInvoiceForm />
        <Routes>
          <Route exact path="/" element={<Invoices data={data} />}></Route>
          <Route path="/:id" element={<ViewInvoice />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
