import './InvoicesList.css';
import SingleInvoice from './SingleInvoice';

const InvoicesList = ({data}) => {
    return (
        <div className = 'invoices-list'>
               {data.map((singledata) => (
               <SingleInvoice key={singledata.id} singledata={singledata} />
               ))}  
            {/* <SingleInvoice /> */}
        </div>
    )
}

export default InvoicesList
