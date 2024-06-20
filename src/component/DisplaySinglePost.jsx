import { useState, useEffect } from "react"
import { useParams, Form } from "react-router-dom"
import Info from './info.js'
function Post (post) {
    if (post === '') {
        return <>
            <h1>Loading</h1>
        </>
    } else {
        return <>
            <h1>{post.post.title}</h1>
            <p>{post.post.postContent}</p>
        </>
    } 
}
function DisplaySinglePost () {
    const params = useParams()
    const [post, setPost] = useState('')
    const [comments, setComments] = useState([''])
    const [commentContent, setCommentContent] = useState('')
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
        <Form>
            <input className="border-black border-solid border-2" id="commentContent" type="text" value={commentContent} onChange={e => {setCommentContent(e.target.value)}} required/>
            <button onClick={async (click) => {
                click.preventDefault()
                try {
                    const request = await fetch(Info + '/comments', {
                        method: "POST",
                        mode: 'cors',
                        headers: {'Content-Type': "application/json", "Authorization": `Bearer ${localStorage.getItem('token')}`},
                        body: JSON.stringify({
                            "user": localStorage.getItem('id'),
                            "post": params.postId,
                            "commentContent": commentContent,
                            "date": new Date()
                        })
                    })
                    const response = await request.json()
                    if (response.error) {

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
                return <> 
                    <p>{comment.user} - {comment.commentContent}</p>
                </>
            }
        })}
        <a href="/">
            <button>Go Back</button>
        </a>
    </>
}
export default DisplaySinglePost