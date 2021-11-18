import './SingleInvoice.css';

const SingleInvoice = ({singledata}) => {
    return (
        <div className='single-invoice'>
            <div className = 'singleItem'><span className='name-date'>#</span>{singledata.id}</div>
           <div className = 'singleItem name-date '>Due {singledata.paymentDue} </div>
           <div className = 'singleItem name-date '>{singledata.clientName} </div>
           <div className = 'singleItem'>{singledata.total} </div>

{/* /*TODO: draft light */}
           <div className = 'singleItem status' style = {{textTransform:'capitalize', color: singledata.status==='paid'? '#33D69F' : (singledata.status==='draft' ? '#373B53': '#FF8F00'), backgroundColor: singledata.status==='pending'? 'rgba(255,143,0,0.06)' : 'white'}}> <span className='little-circle'>•</span> {singledata.status}  </div>
        </div>
    )
}

export default SingleInvoice
