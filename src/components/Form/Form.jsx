import "./Form.css"
export default function Form() {
    const handleSubmite = (e) => {
        e.preventDefault();
        console.log(e.target.name.value)
        console.log(e.target.email.value)
        console.log(e.target.password.value)
    }
  return (
    <div>
        <form onSubmit={handleSubmite}>
            <input type="text" name="name" placeholder="Enter your Name"/>
            <br />
            <br />

            <input type="email" name="email" placeholder="Enter your email" />
            <br />
            <br />
            
            <input type="password" name="password" placeholder="Enter your password"/>
            <br />
            <br />

            <input type="submit" value="Submit Form" />
        </form>
    </div>
  )
}
