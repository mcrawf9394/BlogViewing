import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import Info from './info.js'
function DisplayPosts () {
    const navigate = useNavigate()
    const [content, setContent] = useState([''])
    useEffect(() => {
        const getInfo = async () => {
            const request = await fetch(Info + '/posts')
            const response = await request.json()
            setContent(response.posts)
        }
        getInfo()
    }, [])
    return <>
        {content.map(post => {
            if (post === '') {
                return <>
                    <h1>Loading</h1>
                 </>
            } else {
                return <> 
                    <button onClick={click => {
                        click.preventDefault()
                        navigate(`/post/${post._id}`)
                    }}>
                        <h2>{post.title}</h2>
                        <p>{post.postContent}</p>
                    </button>
                </>
            }
        })}
    </>
}
export default DisplayPosts