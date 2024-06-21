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
    return <div className='col-span-6 bg-gray-950'>
        {content.map(post => {
            if (post === '') {
                return <>
                    <h1 className="text-white">Loading</h1>
                 </>
            } else {
                return <> 
                    <button onClick={click => {
                        click.preventDefault()
                        navigate(`/post/${post._id}`)
                    }} className="bg-gray-400 hover:bg-gray-200 w-10/12 h-2/6 mt-4 mx-20">
                        <h2 className="font-sans text-4xl">{post.title}</h2>
                    </button>
                </>
            }
        })}
    </div>
}
export default DisplayPosts