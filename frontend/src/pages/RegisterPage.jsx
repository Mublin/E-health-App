import React, { useContext, useState } from 'react'
import { UseContext } from '../context/useContext'

const RegisterPage = () => {
    const {registerHandler}  = useContext(UseContext)
    const [name, setName] = useState('')
    const [regNo, setRegNo] = useState('')
    const [genotype, setGenotype] = useState('')
    const [email, setEmail] = useState('')
    const [bloodGroup, setBloodGroup] = useState('')
    const [password, setPassword] = useState('')
    const submitHandler =  (e)=>{
        e.preventDefault();
        registerHandler(regNo, password, email, genotype, bloodGroup, name)
    }
  return (
    <main className="body-container">
    <form onSubmit={submitHandler}>
        <label htmlFor="">
            Name: <input type="text" name="name" value={name} required onChange={(e)=>{ setName(e.target.value)}} id="" />
        </label>
        <label htmlFor="">
            Registration Number: <input type="text" value={regNo} required onChange={(e)=>{setRegNo(e.target.value)}} name="reg-no" id="" />
        </label>
        <label htmlFor="">
            Blood Group: <select name="blood-group" value={bloodGroup} required onChange={(e)=> {setBloodGroup(e.target.value)}} id="">
                <option value=""></option>
                <option value="A+">A+</option>
                <option value="A-">A-</option>
                <option value="B+">B+</option>
                <option value="B-">B-</option>
                <option value="O+">O+</option>
                <option value="O-">O-</option>
            </select>
        </label>
        <label htmlFor="">
            Genotype: <select name="genotype" value={genotype} required onChange={(e)=>{setGenotype(e.target.value)}} id="">
                <option value=""></option>
                <option value="AA">AA</option>
                <option value="AS">AS</option>
                <option value="SS">SS</option>
            </select>
        </label>
        <label htmlFor="">
            Email: <input type="email" name="email" value={email} required onChange={(e)=>{setEmail(e.target.value)}} id="" />
        </label>
        <label htmlFor="">
            Password: <input type="password" name="password" value={password} required onChange={(e)=> { setPassword(e.target.value)}} id="" />
        </label>
        <button>submit</button>
    </form>
    
  </main>
  )
}

export default RegisterPage


