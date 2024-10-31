import { useEffect, useRef, useState } from "react";

const RefForm = () => {

    const nameRef = useRef(null);
    const emailRef = useRef(null);
    const passwordRef = useRef(null);
    const [error, setError] = useState('');

    useEffect( () =>{
        nameRef.current.focus();
    }, [])

    const handleSubmit = e => {
        e.preventDefault();
        if(passwordRef.length < 6){
            setError('password mustbe 6 charecter or larger')
        }
        else{
            console.log(nameRef.current.value);
            console.log(emailRef.current.value);
            console.log(passwordRef.current.value);
        }
    }

    return (
        <div>
        <form onSubmit = {handleSubmit}>
          <input ref={nameRef} type="text" name="name"/>
          <br/>
          <input ref={emailRef} defaultValue={'rojoni@sojoni.com'} type="email" name="email"/>
          <br/>
          <input ref={passwordRef} type="password" name="password" />
          <br/>
          <input type="submit" value="Submit"/>
{
    error && <p>{error}</p>
}
        </form>
        </div>
    );
};

export default RefForm;