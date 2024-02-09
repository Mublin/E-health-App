import React from 'react'

const LoginPage = () => {
    const {loginHandler}  = useContext(UseContext)
    const [regNo, setRegNo] = useState('')
    const [password, setPassword] = useState('')
    const submitHandler =  (e)=>{
        e.preventDefault();
        loginHandler(regNo, password)
    }
  return (
<main className="body-container">
    <form onSubmit={submitHandler}>
        <label htmlFor="">
            Registration Number: <input type="text" value={regNo} required onChange={(e)=>{setRegNo(e.target.value)}} name="reg-no" id="" />
        </label>
        <label htmlFor="">
            Password: <input type="password" name="password" value={password} required onChange={(e)=> { setPassword(e.target.value)}} id="" />
        </label>
        <button>submit</button>
    </form>
    
  </main>
  )
}

export default LoginPage