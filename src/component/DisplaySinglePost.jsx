import { useState, useEffect } from "react"
import { useParams, Form, useNavigate } from "react-router-dom"
import Info from './info.js'
function Post (post) {
    if (post === '') {
        return <>
            <h1>Loading</h1>
        </>
    } else {
        return <div className="min-h-96 w-10/12 bg-gray-600 rounded-3xl mx-auto my-4">
            <h1 className="text-white text-2xl text-center mt-4">{post.post.title}</h1>
            <p className="text-white text-lg mx-4 indent-4">{post.post.postContent}</p>
        </div>
    } 
}
function DisplaySinglePost () {
    const params = useParams()
    const [post, setPost] = useState('')
    const [comments, setComments] = useState([''])
    const [commentContent, setCommentContent] = useState('')
    const navigate = useNavigate()
    useEffect(() => {
        const getInfo = async () => {
            try {
                const request = await fetch(Info + `/posts/${params.postId}`)
                const response = await request.json()
                setPost(response.post)
                setComments(response.comments)
            } catch (err) {
                console.log(err)
            }
        }
        getInfo()
    }, [])
    return <>
        <Post 
            post={post}
        />
        <Form className="w-10/12 mx-auto my-4">
            <input className="bg-gray-600 border-black border-solid border-4 w-8/12 mr-4" id="commentContent" type="text" value={commentContent} onChange={e => {setCommentContent(e.target.value)}} required/>
            <button className="bg-gray-600 border-black border-solid border-4 rounded-xl w-2/12 hover:scale-110" onClick={async (click) => {
                click.preventDefault()
                try {
                    const request = await fetch(Info + '/comments', {
                        method: "POST",
                        mode: 'cors',
                        headers: {'Content-Type': "application/json", "Authorization": `Bearer ${localStorage.getItem('token')}`},
                        body: JSON.stringify({
                            "user": localStorage.getItem('name'),
                            "post": params.postId,
                            "commentContent": commentContent,
                            "date": new Date()
                        })
                    })
                    const response = await request.json()
                    if (response.error) {
                        console.log(response.error)
                    } else {

                    }
                } catch (err) {
                    console.log(err)
                }
            }}>Add Comment</button>
        </Form>

        {comments.map(comment => {
            if (comment === '') {
                return <>
                    <h1>Loading</h1>
                </>
            } else {
                return <div className="w-full"> 
                    <p className="mx-32 text-white">{comment.user} - {comment.commentContent}</p>
                </div>
            }
        })}
        <button className="ml-32 bg-gray-600 border-black border-solid border-4 rounded-xl w-2/12 hover:scale-110" onClick={(click) => {
            click.preventDefault()
            navigate('/')
        }}>Go Back</button>
    </>
}
export default DisplaySinglePost