import { useState } from "react"
import { useNavigate, Form } from "react-router-dom"
import Info from './info.js'
function UpdateUser () {
    const navigate = useNavigate()
    const [pass, setPass] = useState('')
    const [con, setConfirm] = useState('')
    return <>
        <Form className="h-screen w-8/12 mx-auto my-auto grid grid-rows-7 rounded-3xl bg-gray-600">
            <label className="self-end text-white ml-8 text-2xl" htmlFor="password">New Password</label>
            <input className="h-10 row-span-2 bg-gray-400 ml-8 w-11/12 border-black border-4" name="password" type="text" minLength="1" value={pass} onChange={e => {setPass(e.target.value)}} required/>
            <label className="self-end text-white ml-8 text-2xl" htmlFor="confirm">Confirm New Password</label>
            <input className="h-10 row-span-2 bg-gray-400 ml-8 w-11/12 border-black border-4" name="confirm" type="text" minLength="1" value={con} onChange={e => {setConfirm(e.target.value)}} required/>
            <button className="bg-gray-400 border-black border-4 rounded-2xl w-40 h-20 justify-self-center transition ease-in-out hover:scale-110" onClick={async (click) => {
                click.preventDefault()
                try {
                    const api = await fetch(`${Info}/users/${localStorage.getItem('id')}`, {
                        method: "PUT",
                        mode: 'cors',
                        headers: {'Content-Type' :'application/json', 'Authorization': `Bearer ${localStorage.getItem('token')}`},
                        body: JSON.stringify({
                            "password": pass,
                            "confirm": con
                        })
                    })
                    const result = await api.json()
                    console.log(result)
                    navigate('/')
                } catch (err) {
                    console.error(err)
                }
            }}>Submit</button>
        </Form>
    </>
}
export default UpdateUser