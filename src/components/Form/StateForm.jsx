import { useState } from "react"
import "./Form.css"

export default function StateForm() {
    const [person, setPerson] = useState(null)
    const [email, setEmail] = useState(null)
    const [password, setPassword] = useState(null)

    const handleSubmite = e => {
        e.preventDefault();
        console.log(person, email, password)
    }

    const handleNameChange = e => {
        setPerson(e.target.value)
    }

    const handleEmailChange = e => {
        setEmail(e.target.value)
    }

    const handlePasswordChange = e => {
        setPassword(e.target.value)
    }

  return (
    <div>
        <form onSubmit={handleSubmite}>
            <input type="text" onChange={handleNameChange} name="name" placeholder="suvo datta"/>
            <br />
            <br />

            <input type="email" onChange={handleEmailChange} name="email" placeholder="suvo7@gmail.com" />
            <br />
            <br />
            
            <input type="password" onChange={handlePasswordChange} name="password" placeholder="your password"/>
            <br />
            <br />

            <input type="submit" value="Submit Form" />
        </form>
    </div>
  )
}
