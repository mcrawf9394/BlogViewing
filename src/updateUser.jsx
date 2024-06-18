import { useState } from "react"
import { useNavigate, Form } from "react-router-dom"
function UpdateUser () {
    const navigate = useNavigate()
    const [pass, setPass] = useState('')
    const [con, setConfirm] = useState('')
    return <>
        <Form>
            <label htmlFor="password">New Password</label>
            <input name="password" type="text" minLength="1" value={pass} onChange={e => {setPass(e.target.value)}} required/>
            <label htmlFor="confirm">Confirm New Password</label>
            <input name="confirm" type="text" minLength="1" value={con} onChange={e => {setConfirm(e.target.value)}} required/>
            <button onClick={async (click) => {
                click.preventDefault()
                try {
                    const api = await fetch(`http://localhost:3000/api/users/${localStorage.getItem('id')}`, {
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