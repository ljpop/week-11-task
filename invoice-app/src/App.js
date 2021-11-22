import Header from "./components/Header/Header";
import Invoices from "./components/Invoices/Invoices";
// import NewInvoiceForm from "./components/NewInvoiceForm/NewInvoiceForm";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import data from "./data";
import ViewInvoice from "./components/ViewInvoice/ViewInvoice";
import { useState } from "react";
import EditForm from "./components/EditForm/EditForm";

function App() {
  const initialState = data;
  const [state, setState] = useState(initialState);
  const [showForm, setShowForm] = useState(false);
  const [editorId, setEditorId] = useState(false);

  const openForm = (id) => {
    setShowForm(true);
    setEditorId(id);
  };
  const closeForm = () => {
    setShowForm(false);
  };

  const deleteItem = (id) => {
    let editedState = state.filter((item) => {
      if (item.id === id) {
        // to je taj koji zelimo da obrisemo
        return false; // znaci da nece uci u sastav novog niza
      }
      return true; // sve ostale ostaju u nizu
    });
    // i sad kad smo dobbili novi niz koji je skracen, upisujemo ga u state
    setState(editedState);
  };

  const updateItem = (id, editedValues) => {
    let editedState = state.map((item) => {
      if (item.id === id) {
        // return item; // izmenjen item
        return {
          ...item,
          ...editedValues,
          id: item.id, // za svaki slcuaj da item ne bi ostao bez svog id-a
        }; // izmenjen item
      }
      return item; // neizmenjen item
    });
    // i sad kad smo dobbili novi niz koji je skracen, upisujemo ga u state
    setState(editedState);
  };

  const updateInvoiceStatus = (id) => {
    let editedState = state.map((item) => {
      if (item.id === id) {
        // return item; // izmenjen item
        return {
          ...item,
          status: "paid",
        }; // izmenjen item
      }
      return item; // neizmenjen item
    });
    // i sad kad smo dobbili novi niz koji je skracen, upisujemo ga u state
    setState(editedState);
  };

  let jsxForm = null;
  if (showForm) {
    jsxForm = (
      <EditForm
        id={editorId}
        closeForm={closeForm}
        data={state}
        updateItem={updateItem}
      />
    );
  }

  return (
    <Router>
      <div className="container">
        <Header />
        {jsxForm}
        <Routes>
          <Route exact path="/" element={<Invoices data={state} />}></Route>
          <Route
            path="/invoice/:id"
            element={
              <ViewInvoice
                data={state}
                deleteInvoice={deleteItem}
                updateInvoiceStatus={updateInvoiceStatus}
                openForm={openForm}
                closeForm={closeForm}
              />
            }
          ></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
