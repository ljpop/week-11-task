import "./InvoicesList.css";
import EmptyList from "../EmptyList/EmptyList";

import SingleInvoice from "../SingleInvoice/SingleInvoice";

const InvoicesList = ({ data }) => {
  return (
    <div className="invoices-list">
      {data.length > 0 ? (
        data.map((singledata) => (
          <SingleInvoice key={singledata.id} singledata={singledata} />
        ))
      ) : (
        <EmptyList />
      )}
    </div>
  );
};

export default InvoicesList;
