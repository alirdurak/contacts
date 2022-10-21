import {useState, useEffect} from 'react'
import List from './list'
import Form from "./form"

function Contacts() {

    const [contacts, setContacts] = useState([{
        fullname: "Ali Rıza Durak",
        phone_number:"00000000"
    },
    {
        fullname: "Sevginur Sağ",
        phone_number:"1111111111"
    },{
        fullname: "Bu Kim Belli Değil",
        phone_number:"2222222222"
    }
])
    useEffect(() =>{

    },[contacts])

  return (
    <div>
      <List contacts={contacts}/>
      <Form addContact={setContacts} contacts={contacts}/>
    </div>
  )
}

export default Contacts
