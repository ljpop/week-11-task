import "./NewInvoiceBtn.css";
import Plus from "../../assets/icon-plus.svg";

const NewInvoiceBtn = () => {
  return (
    <div className="new-invoice-btn">
      <img className="plus" src={Plus} alt="" /> New Invoice
    </div>
  );
};

export default NewInvoiceBtn;
