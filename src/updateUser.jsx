import { useState, useEffect } from "react"
import { useNavigate, Form } from "react-router-dom"
function UpdateUser () {
    const [infoLoad, setInfo] = useState(["loading"])
    
    const [userInfo, setUserInfo] = useState({})
    return <>
        {infoLoad.map((info) => {
            if ("loading") {
                return <h1>Loading ..... <br></br> Please Wait</h1>
            } else {

            }
        })}
    </>
}
export default UpdateUser