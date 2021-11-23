import "./NewInvoiceBtn.css";
import Plus from "../../assets/icon-plus.svg";
import { useDispatch } from "react-redux";

const NewInvoiceBtn = () => {
  const dispatch = useDispatch();

  return (
    <div
      className="new-invoice-btn"
      onClick={(e) => {
        dispatch({
          type: "CREATE_INVOICE",
        });
      }}
    >
      <img className="plus" src={Plus} alt="" /> New Invoice
    </div>
  );
};

export default NewInvoiceBtn;
