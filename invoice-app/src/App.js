import Header from "./components/Header/Header";
import Invoices from "./components/Invoices/Invoices";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ViewInvoice from "./components/ViewInvoice/ViewInvoice";
import EditForm from "./components/EditForm/EditForm";
import { connect } from "react-redux";

const App = (props) => {
  let jsxForm = null;
  if (props.editorOpened) {
    jsxForm = <EditForm />;
  }

  let clDarkTheme = "";
  if (props.darkTheme) {
    clDarkTheme = " dark-theme";
  }

  return (
    <Router>
      <div className={"container" + clDarkTheme}>
        <Header />
        {jsxForm}
        <Routes>
          <Route exact path="/" element={<Invoices />}></Route>
          <Route path="/invoice/:id" element={<ViewInvoice />}></Route>
        </Routes>
      </div>
    </Router>
  );
};

const mapStateToProps = (state) => {
  return {
    editorOpened: state.editorOpened,
    darkTheme: state.darkTheme,
  };
};
export default connect(mapStateToProps)(App);
