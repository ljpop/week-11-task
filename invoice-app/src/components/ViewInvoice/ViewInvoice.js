import "./ViewInvoice.css";
import { useParams } from "react-router";
import { _getSingleInvoiceByID } from "../../utils/inovice-utils";
// import data from "../../data";

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
    console.log("Ispis");
    jsx = (
      <>
        <div>{invoice.description}</div>
        <button
          onClick={(e) => {
            props.deleteInvoice(id);
          }}
        >
          Delete
        </button>
        <button
          onClick={(e) => {
            props.openForm(id);
          }}
        >
          Edit
        </button>
        <button
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
        View Invoice {id}
        {invoice.status}
        <div>{jsx}</div>
      </div>
    </>
  );
};

export default ViewInvoice;
