import { createContext, useReducer } from "react"
import { useNavigate } from 'react-router-dom'
import { users } from "../utils/data"
export const initialState = {
    userDetails: null
}

const reducer =(state, action) => {
    switch (action.type) {
        case "user_signin":
            return {...state, userDetails: action.payload}
            case "user_signout":
                return {...state, userDetails: null}
                case "user_register":
            return {...state, userDetails: action.payload}
        default:
            return state
    }
}

const useUserContext = (initState)=>{
    const [state, dispatch] = useReducer(reducer, initState)
    const navigate = useNavigate()
    const registerHandler = (registrationNumber, password, email, genotype, bloodGroup, name)=>{
        try {
            const user = users.some(x=> x.registrationNumber === registrationNumber.toUpperCase())
            if (!user && registrationNumber && password && email && genotype && bloodGroup && name) {
                dispatch({
                    type: "user_register",
                    payload: {
                        email: email,
                        registrationNumber: registrationNumber,
                        name: name,
                        tokened: 'ff',
                        id: new Date().getTime(),
                        isAdmin: false,
                        isStudent: true,
                        healthHistory: [],
                        image: '',
                        joined: new Date().toISOString(),
                        bloodGroup,
                        genotype
            }})
            navigate('/')
            // toast.success(`Welcome ${name}!, enjoy your day`)
            }else{
                throw Error("Invalid username or password")
            }
        } catch (error) {
            alert(error)
        }
    }
    const signInHandler = (registrationNumber, password)=>{
    try {
        const user = users.find(x=> x.registrationNumber === registrationNumber.toUpperCase())
        if (user.password == password && registrationNumber && password) {
            dispatch({
                type: "user_signin",
                payload: {
                    email: user.email,
                    registrationNumber: user.registrationNumber,
                    tokened: user.tokened,
                    id: user.id,
                    isAdmin: user.isAdmin,
                    isStudent: user.isStudent,
                    healthHistory: user.healthHistory,
                    image: user.image,
                    joined: user.joined,
                    bloodGroup: user.bloodGroup,
                    genotype: user.genotype
                }
            }
            )
            navigate('/')
        }else{
            throw Error("Invalid username or password")
        }
    } catch (error) {
        alert(error)
    }
    }
    const logOutHandler = ()=>{
        dispatch({
            type: "user_signout",
        })
        navigate('/signin')
    }
    return { state, registerHandler, signInHandler, logOutHandler}
}

const initialContextState= {
    state: initialState,
    logOutHandler: ()=>{},
    signInHandler:  (registrationNumber, password) =>{},
    registerHandler: (registrationNumber, password, email, genotype, bloodGroup, name) =>{}
}


export const UseContext = createContext(initialContextState)


export const ContextProvider = ({children, ...initialState})=>{
    return <UseContext.Provider value={useUserContext(initialState)}>{children}</UseContext.Provider>
}