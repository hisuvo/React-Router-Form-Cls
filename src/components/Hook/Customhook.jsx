import UseIntputState from '../../Hooks/userInputState';
import './Customhook.css'

export default function Customhook() {

  // const [name, handleNameChange] = UseIntputState("suvo datta ")
  // const [email, handleEmailChange] = UseIntputState("suvo@gmail.com")
  // const [password, handlePasswordChangle] = UseIntputState(null)

  const nameState = UseIntputState("suvo")
  const emailState = UseIntputState("suvo@gmail.com")
  const passwordState = UseIntputState(null)


    const handleSubmit = e => {
      // console.log(name, email, password)
      console.log(nameState.value);
      console.log(emailState.value);
      console.log(passwordState.value);

        e.preventDefault();
    }

  return (
    <div>
        <form onSubmit={handleSubmit}>
          <label htmlFor="">Enter Name</label><br />
            {/* <input value={name} onChange={handleNameChange} type="text" name="name" id="name" /> <br /> */}
            <input {...nameState} type="text" name="name" id="name" /> <br />

            <label htmlFor="">Enter Email</label> <br />
            {/* <input value={email} onChange={handleEmailChange} type="email" name="email" id="email" /> <br /> */}
            <input {...emailState} type="email" name="email" id="email" /> <br />

            <label htmlFor="">Enter password</label><br />
            {/* <input value={password} onChange={handlePasswordChangle} type="password" name="password" id="password" /> <br /> */}
            <input {...passwordState} type="password" name="password" id="password" /> <br />

            <input type="submit" value="Submit" />
        </form>
    </div>
  )
}
