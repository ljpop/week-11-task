import './Invoices.css';
import InvoicesHeader from './InvoicesHeader';
import InvoicesList from './InvoicesList';


const Invoices = ({data}) => {
    return (
        <div className='invoices'>
            <InvoicesHeader />    
            <InvoicesList data={data} />                    
        </div>
    )
}

export default Invoices
