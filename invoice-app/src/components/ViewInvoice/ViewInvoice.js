import "./ViewInvoice.css";
import { useParams } from "react-router";
import { _getSingleInvoiceByID } from "../../utils/inovice-utils";
import { Link } from "react-router-dom";
import ArrowLeft from "../../assets/icon-arrow-left.svg";
import { connect, useDispatch } from "react-redux";

const ViewInvoice = (props) => {
  const dispatch = useDispatch();
  const data = props.invoicesData;
  const sviparametri = useParams();
  console.log(sviparametri);
  const { id } = useParams();
  const invoice = _getSingleInvoiceByID(id, data);
  console.log(invoice);
  let jsx = <p>Invoice not found</p>;
  if (invoice) {
    jsx = (
      <>
        <button
          className="btn btn-edit"
          onClick={(e) => {
            dispatch({
              type: "OPEN_FORM",
              payload: id,
            });
          }}
        >
          Edit
        </button>
        <Link to="/">
          <button
            className="btn btn-delete"
            onClick={(e) => {
              dispatch({
                type: "DELETE_INVOICE",
                payload: id,
              });
            }}
          >
            Delete
          </button>
        </Link>
        <button
          className="btn btn-paid"
          onClick={(e) => {
            dispatch({
              type: "UPDATE_INVOICE_STATUS",
              payload: id,
            });
          }}
        >
          Mark as Paid
        </button>
        <div className="invoice-content">
          <div className="container-1">
            <div className="info">
              <div className="id-div">
                <span>#</span>
                {id}
              </div>
              <p>{invoice.description}</p>
            </div>
            <div className="sender">
              <p className="sender">{invoice.senderAddress.street}</p>
              <p className="sender">{invoice.senderAddress.city}</p>
              <p className="sender">{invoice.senderAddress.postCode}</p>
              <p className="sender">{invoice.senderAddress.country}</p>
            </div>
          </div>
          <div className="container-1">
            <div className="container-2-1">
              <div className=" container-item">
                <div className="inv-date">
                  <p className="label">Invoice Date</p>
                  <div className="font-bold">{invoice.createdAt}</div>
                </div>
                <div className="  payment-due ">
                  <p className="label">Payment Due</p>
                  <div className="font-bold">{invoice.paymentDue}</div>
                </div>
              </div>
              <div className="bill-to container-item">
                <p className="label">Bill To</p>
                <div className="font-bold">{invoice.clientName}</div>
                <div className="client-info ">
                  <div className="client">{invoice.clientAddress.street}</div>
                  <div className="client"> {invoice.clientAddress.city}</div>
                  <div className="client">
                    {" "}
                    {invoice.clientAddress.postCode}
                  </div>
                  <div className="client">{invoice.clientAddress.country}</div>
                </div>
              </div>
              <div className="client-email container-item">
                <p className="label">Sent to</p>
                <div className="font-bold">{invoice.clientEmail}</div>
              </div>
            </div>
          </div>
          <div className="items-list">ItemName</div>
          <div className="amount">Amount Due {invoice.total}</div>
        </div>
      </>
    );
  }

  return (
    <>
      <div className="view-invoice">
        <Link to="/">
          <img className="arrow-left" src={ArrowLeft} alt="" />
          <button className="btn-back">Go back</button>
        </Link>
        <div className="invoice-header">
          <div className="status-div">
            <p>Status</p>
            <div className={`status ${invoice.status} `}>
              <span className="little-circle">•</span>
              {invoice.status}
            </div>
          </div>
          <div>{jsx}</div>
        </div>
      </div>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    invoicesData: state.invoicesData,
  };
};
export default connect(mapStateToProps)(ViewInvoice);
