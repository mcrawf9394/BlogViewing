import { useState } from "react"
import { Form, useNavigate} from "react-router-dom"
import Info from './info.js' 
function Signup () {
    let [init, setInt] = useState("")
    let [last, setLast] = useState('')
    let [user, setUser] = useState('')
    let [pass, setPass] = useState('')
    let [errors, setErrors] = useState('')
    let navigate = useNavigate()
    return <>
        <Form className="h-screen w-8/12 mx-auto my-auto grid grid-rows-10 rounded-3xl bg-gray-600">
            <label className="self-end text-white ml-8 text-2xl" htmlFor="firstName">First Name</label>
            <input className="h-10 bg-gray-400 ml-8 w-11/12 border-black border-4" name="firstName" type="text" value={init} onChange={(e) => {setInt(e.target.value)}} required/>
            <label className="self-end text-white ml-8 text-2xl" htmlFor="lastName">Last Name</label>
            <input className="h-10 bg-gray-400 ml-8 w-11/12 border-black border-4" name="lastName" type="text"  value={last} onChange={(e) => {setLast(e.target.value)}} required/>
            <label className="self-end text-white ml-8 text-2xl" htmlFor="username">Username</label>
            <input className="h-10 bg-gray-400 ml-8 w-11/12 border-black border-4" name="username" type="text"  value={user} onChange={(e) => {setUser(e.target.value)}} required/>
            <label className="self-end text-white ml-8 text-2xl" htmlFor="password">Password</label>
            <input className="h-10 bg-gray-400 ml-8 w-11/12 border-black border-4" name="password" type="text"  value={pass} onChange={(e) => {setPass(e.target.value)}} required/>
            <button className="row-span-2 bg-gray-400 border-black border-4 rounded-2xl w-40 h-20 justify-self-center transition ease-in-out hover:scale-110" onClick={async (event) => {
                event.preventDefault()
                let firstName = init
                let lastName = last
                let username = user
                let password = pass
                try {
                    const api = await fetch(Info + '/users', {
                        method: 'POST',
                        mode: 'cors',
                        headers: {"Content-Type": "application/json"},
                        body: JSON.stringify({
                            "firstName": firstName,
                            "lastName": lastName,
                            "username": username,
                            "password": password
                        }) 
                    }) 
                    const response = await api.json()
                    if (!response.success) {
                        setErrors(response.error[0].msg)
                    } else {
                        navigate('/login')   
                    }
                } catch (error) {
                    console.error(error);                    
                }
            }}>Submit</button>
        </Form>
        <h1>{errors}</h1>
    </>
}
export default Signup