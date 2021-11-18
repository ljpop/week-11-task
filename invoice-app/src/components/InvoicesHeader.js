import Filter from "./Filter"
import NewInvoice from "./NewInvoice"

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
                <NewInvoice />  
            </div>     
        </div>
    )
}

export default InvoicesHeader
