import { useState } from "react"
import { Form, useNavigate} from "react-router-dom"
function Signup () {
    let [init, setInt] = useState("")
    let [last, setLast] = useState('')
    let [user, setUser] = useState('')
    let [pass, setPass] = useState('')
    let [errors, setErrors] = useState('')
    let navigate = useNavigate()
    return <>
        <Form>
            <label htmlFor="firstName">First Name</label>
            <input name="firstName" type="text" value={init} onChange={(e) => {setInt(e.target.value)}} required/>
            <label htmlFor="lastName">Last Name</label>
            <input name="lastName" type="text"  value={last} onChange={(e) => {setLast(e.target.value)}} required/>
            <label htmlFor="username">Username</label>
            <input name="username" type="text"  value={user} onChange={(e) => {setUser(e.target.value)}} required/>
            <label htmlFor="password">Password</label>
            <input name="password" type="text"  value={pass} onChange={(e) => {setPass(e.target.value)}} required/>
            <button onClick={async (event) => {
                event.preventDefault()
                let firstName = init
                let lastName = last
                let username = user
                let password = pass
                try {
                    const api = await fetch('http://localhost:3000/api/users', {
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