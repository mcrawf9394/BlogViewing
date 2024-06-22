import { useState } from "react"
import { useNavigate, Form } from "react-router-dom"
import Info from './info.js'
function Login () {
    const [user, setUser] = useState('')
    const [pass, setPass] = useState('')
    const [error, setError] = useState('')
    const navigate = useNavigate()
    return <>
        <Form className="h-screen w-8/12 mx-auto my-auto grid grid-rows-7 rounded-3xl bg-gray-600" >
            <label htmlFor="username" className="self-end text-white ml-8 text-2xl">Username</label>
            <input className="h-10 row-span-2 bg-gray-400 ml-8 w-11/12 border-black border-4" name="username" type="text" value={user} onChange={(e) => {setUser(e.target.value)}} required/>
            <label htmlFor="password" className="self-end text-white ml-8 text-2xl">Password</label>
            <input className="h-10 row-span-2 bg-gray-400 ml-8 w-11/12 border-black border-4" name="password" type="text" value={pass} onChange={(e) => {setPass(e.target.value)}} required/>
            <button className="bg-gray-400 border-black border-4 rounded-2xl w-40 h-20 justify-self-center transition ease-in-out hover:scale-110" onClick={async (click) =>{
                click.preventDefault()
                try {const request = await fetch(Info + '/users/login', {
                    method: 'POST',
                    mode: "cors",
                    headers: {"Content-Type": "application/json"},
                    body: JSON.stringify({
                        "username": user,
                        "password": pass
                    })
                })
                const response = await request.json()
                if (!response.token) {
                    setError(response.error[0].msg)
                } else {
                    localStorage.setItem('token', response.token)
                    localStorage.setItem('id', response.id)
                    localStorage.setItem('name', response.name)
                    navigate('/')
                }
                } catch (err) {
                    console.error(err)
                }
            }}>Submit</button>
        </Form>
        <h1>{error}</h1>
    </>
}
export default Login