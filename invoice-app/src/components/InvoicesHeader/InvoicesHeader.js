import { connect } from "react-redux";
import Filter from "../Filter/Filter";
import NewInvoiceBtn from "../NewInvoiceBtn/NewInvoiceBtn";

const InvoicesHeader = ({ data }) => {
  let jsx = "";
  if (data.length) {
    jsx = `There are ${data.length} pending invoices`;
  }

  return (
    <div className="invoices-header">
      <div>
        <h1>Invoices</h1>
        <p>{jsx}</p>
      </div>
      <div className="header-item-row">
        <Filter />
        <NewInvoiceBtn />
      </div>
    </div>
  );
};

// export default InvoicesHeader;
const mapStateToProps = (state) => {
  return {
    // id: state.currentEditingID,
    data: state.invoicesData,
  };
};
export default connect(mapStateToProps)(InvoicesHeader);
