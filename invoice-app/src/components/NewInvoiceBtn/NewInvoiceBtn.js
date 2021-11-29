import "./NewInvoiceBtn.css";
import Plus from "../../assets/icon-plus.svg";
import { useDispatch } from "react-redux";

const NewInvoiceBtn = () => {
  const dispatch = useDispatch();

  return (
    <>
    <div
      className="new-invoice-btn desktop"
      onClick={(e) => {
        dispatch({
          type: "CREATE_INVOICE",
        });
      }}
    >
      <img className="plus" src={Plus} alt="" /> New Invoice
    </div>    
    <div
      className="new-invoice-btn mob"
      onClick={(e) => {
        dispatch({
          type: "CREATE_INVOICE",
        });
      }}
    >
      <img className="plus" src={Plus} alt="" /> New 
    </div>
      </>
  );
};

export default NewInvoiceBtn;
