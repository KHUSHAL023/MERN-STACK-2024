
    // document.querySelector("#Signup").addEventListener("click", () => {
    //     let email = document.querySelector("#email").value;
    //     let name = document.querySelector("#name").value;
    //     let password = document.querySelector("#password").value;
    //     let address = document.querySelector("#address").value;
    //     let obj = { name, email, password, address };
    //     console.log(obj);
    //     sgn(obj);
    // })
    // let url = "https://ill-stole-duck.cyclic.app/user/register"
    // let sgn = async (obj) => {

    //     let res = await fetch(url, {
    //         method: "POST",
    //         body: JSON.stringify(obj),
    //         headers: {
    //             "Content-Type": "application/json"
    //         }
    //     }).then(res => res.json())
    //         .then(res => alert(res))
    //         .catch(err => alert(err))
    // }


    
    import { useState } from 'react';

    export default function Form() {
      const [person, setPerson] = useState({
        firstName: 'Barbara',
        lastName: 'Hepworth',
        email: 'bhepworth@sculpture.com'
      });
    
      function handleFirstNameChange(e) {
        person.firstName = e.target.value;
      }
    
      function handleLastNameChange(e) {
        person.lastName = e.target.value;
      }
    
      function handleEmailChange(e) {
        person.email = e.target.value;
      }
    
      return (
        <>
          <label>
            First name:
            <input
              value={person.firstName}
              onChange={handleFirstNameChange}
            />
          </label>
          <label>
            Last name:
            <input
              value={person.lastName}
              onChange={handleLastNameChange}
            />
          </label>
          <label>
            Email:
            <input
              value={person.email}
              onChange={handleEmailChange}
            />
          </label>
          <p>
            {person.firstName}{' '}
            {person.lastName}{' '}
            ({person.email})
          </p>
        </>
      );
    }