import { useState } from 'react'
import Header from "./components/Header";
import Invoices from "./components/Invoices";

function App() {
  const [data]=useState([
    {id:1, 
    text: "Doctor Clinic",
    day: 'Feb 5th at 2:30 pm',
    reminder: true 
},
{id:2, 
    text: "School",
    day: 'Feb 6th at 4:30 pm',
    reminder: true 
},
{id:3, 
    text: "Food",
    day: 'Feb 7th at 2:30 am',
    reminder: false 
}
])
  return (
  <div className='container'>
      <Header />
      <Invoices data={data}/>
  </div>
  );
}

export default App;
