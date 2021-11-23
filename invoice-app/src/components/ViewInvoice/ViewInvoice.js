import "./ViewInvoice.css";
import { useParams } from "react-router";
import { _getSingleInvoiceByID } from "../../utils/inovice-utils";
import { Link } from "react-router-dom";
import ArrowLeft from "../../assets/icon-arrow-left.svg";

// import data from "../../data"; When you use backend

// samostalna stranica koja se otiranjem i dobija od rute samo parametar ID i na osnovu njega samostalno mora da nabavi podatak na kojje

const ViewInvoice = (props) => {
  const data = props.data;
  const sviparametri = useParams();
  console.log(sviparametri);
  const { id } = useParams(); // sad u promenjivoj ID imamo id uhvaecn iz path url
  // na osnovu ID-a hvatamo taj podatak
  const invoice = _getSingleInvoiceByID(id, data);
  // let jsx = null;
  let jsx = <p>Invoice not found</p>;
  console.log(invoice);
  if (invoice) {
    // znaci da invoice nije false, znaci da je pronadjen
    jsx = (
      <>
        {/* <div>{invoice.description}</div> */}
        <button
          className="btn btn-edit"
          onClick={(e) => {
            props.openForm(id);
          }}
        >
          Edit
        </button>
        <Link to="/">
          <button
            className="btn btn-delete"
            onClick={(e) => {
              props.deleteInvoice(id);
            }}
          >
            Delete
          </button>
        </Link>
        <button
          className="btn btn-paid"
          onClick={(e) => {
            props.updateInvoiceStatus(id);
          }}
        >
          Mark as Paid
        </button>
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
            {/* <p>Status</p> <div className="status">{invoice.status}</div> */}
            <p>Status</p>

            <div className={`status ${invoice.status} `}>
              <span className="little-circle">•</span>
              {invoice.status}
            </div>
          </div>
          <div>{jsx}</div>
        </div>
        <div className="invoice-content">
          <div>{id}</div>
          <div>{invoice.description}</div>
        </div>
      </div>
    </>
  );
};

export default ViewInvoice;
