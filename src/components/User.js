import { useState } from 'react';
const User = () => {

    //   const [firstName, setFirstName] = useState('Syed')
    //   const [lastName, setLastName] = useState('Rizvi')
    //   const [email, setEmail] = useState('syed@gmail.com')

          const[user, setUser] = useState({
              firstName: "Syed",
              lastName: "Rizvi",
              email: "syed@gmail.com"
          })

       function updateUser(){
        //    setFirstName('Shazan')
        //    setLastName('Rizvis')
        //    setEmail('shazan@gmail.com')
            
            setUser({
                firstName: "Shazan",
                lastName: "Rizvis",
                email: "shazan@gmail.com"
               })

       }

      return(
        <div>
        <h1>User Details</h1>
        <p>{user.firstName}</p>
        <p>{user.lastName}</p>
        <p>{user.email}</p>
        <button onClick={updateUser}>Update User</button>

        </div>
      )
}

export default User