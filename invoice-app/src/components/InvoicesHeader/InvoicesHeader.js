import Filter from "../Filter/Filter"
import NewInvoiceBtn from "../NewInvoiceBtn/NewInvoiceBtn"

const InvoicesHeader = () => {
    return (
        <div className = 'invoices-header'>
            <div>
            <h1>Invoices</h1>  
            <p>There are 4 pending invoices</p> 
            { /*TODO: update!!*/}
            </div>
            <div className = 'header-item-row'>
                <Filter />  
                <NewInvoiceBtn />  
            </div>     
        </div>
    )
}

export default InvoicesHeader
