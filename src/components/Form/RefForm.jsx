import { useRef } from 'react';
import './Form.css'
import { useEffect } from 'react';

export default function RefForm() {
    const nameRef = useRef(null);
    const emailRef = useRef(null);
    const passwordRef = useRef(null)

    useEffect(()=> {
        nameRef.current.focus();
    },[])

    const handleSubmite = e => {
        e.preventDefault();
        console.log(nameRef.current.value)
        console.log(emailRef.current.value)
        console.log(passwordRef.current.value)
    }

  return (
    <div>
        <form onSubmit={handleSubmite}>
            <input type="text" ref={nameRef} placeholder="Enter your Name"/>
            <br />
            <br />

            <input type="email" ref={emailRef} placeholder="Enter your email" />
            <br />
            <br />
            
            <input type="password" ref={passwordRef} placeholder="Enter your password"/>
            <br />
            <br />

            <input type="submit" value="Submit Form" />
        </form>
    </div>
  )
}
