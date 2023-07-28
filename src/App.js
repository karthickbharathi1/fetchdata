import Axios  from 'axios'
import React from 'react'
import { useState , useEffect } from 'react'

const App = () => {
  const [users , setUsers] = useState([])
   
    const callApi = () => {
      Axios.get("https://jsonplaceholder.typicode.com/users/").then((res) => {
        // console.log(res.data[excuse].id)  
      setUsers(res.data)
      
      
      })

    }
     useEffect(() =>
      callApi()
    
    ,[] )
   
      
  



  return (
    <div>

      {users.map((user, id) => {
        return <>
          <p >{user.id}</p>
          <p >{user.name}</p>
          <p >{user.username}</p>
          <p >{user.email}</p>
          <p >{user.address.zipcode}</p>
          <br />
        </>
      } )}
      
    </div>
  )
}

export default App
