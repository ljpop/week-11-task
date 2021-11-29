import "./Invoices.css";
import InvoicesHeader from "../InvoicesHeader/InvoicesHeader";
import InvoicesList from "../InvoicesList/InvoicesList";

const Invoices = () => {
  return (
    <div className="invoices">
      <InvoicesHeader />
      <InvoicesList />
    </div>
  );
};

export default Invoices;
