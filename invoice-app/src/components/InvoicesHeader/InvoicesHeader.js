import { connect } from "react-redux";
import Filter from "../Filter/Filter";
import NewInvoiceBtn from "../NewInvoiceBtn/NewInvoiceBtn";

const InvoicesHeader = ({ data }) => {
  let jsx = "";
  if (data.length) {
    jsx = `There are ${data.length} pending invoices`;
  } else jsx = "No Invoices";

  let jsxMob = "";
  if (data.length) {
    jsxMob = `${data.length} invoices`;
  } else jsxMob = "No Invoices";

  return (
    <div className="invoices-header">
      <div>
        <h1>Invoices</h1>
        <p className="invoices-num desktop">{jsx}</p>
        <p className="invoices-num mobile">{jsxMob}</p>
      </div>
      <div className="header-item-row">
        <Filter />
        <NewInvoiceBtn />
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    data: state.invoicesData,
  };
};
export default connect(mapStateToProps)(InvoicesHeader);
