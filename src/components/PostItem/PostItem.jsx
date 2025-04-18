import { useState, useEffect } from 'react'
import Comment from '../Comment/Comment'
import commentIcon from '/commentIcon.svg'
import { useParams } from 'react-router-dom'
import CommentList from '../CommentList/CommentList'

const usePostItemData = (postId) => {
    const [postItemData, setPostItemData] = useState(null)
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetch(`http://localhost:3000/${postId}`)
            .then((response) => {
                if (response.status >= 400) {
                    throw new Error('server error')
                }
                return response.json()
            })
            .then((response) => setPostItemData(response))
            .catch((error) => setError(error))
            .finally(() => setLoading(false))
    }, [postId])

    return { postItemData, error, loading }
}

function PostItem() {
    const [comment, setComment] = useState('')

    const [show, setShow] = useState(false)

    const { itemId } = useParams()

    const handleCommentDisplay = () => {
        setShow(!show)
    }

    const handleCommentTextarea = (e) => {
        setComment(e.target.value)
    }

    const handleCommentPost = async () => {
        try {
            const response = await fetch(
                `http://localhost:3000/:${itemId}/comments`,
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        comment,
                        authorId: localStorage.getItem('userId'),
                        postId: itemId,
                    }),
                }
            )

            const data = await response.json()
            console.log(data)
        } catch (error) {
            console.log(error)
        }
    }

    const { postItemData, error, loading } = usePostItemData(itemId)

    if (loading)
        return (
            <div>
                <p>Loading...</p>
            </div>
        )
    if (error)
        return (
            <div>
                <p>A network error was encountered</p>
            </div>
        )

    console.log(postItemData)

    return (
        <div className="mt-2 flex w-180 flex-col gap-3 self-center rounded-[12px] bg-neutral-800 p-5.5">
            <p className="text-4xl font-extrabold">{postItemData.title}</p>
            <div className="flex gap-4">
                <p>{postItemData.author.username}</p>
                <p>Posted on: {postItemData.createdAt}</p>
            </div>
            <p>{postItemData.body}</p>
            <button
                onClick={handleCommentDisplay}
                className="flex items-center gap-1.5"
            >
                <img
                    className="h-auto w-3.5"
                    src={commentIcon}
                    alt="comment icon"
                />
                <p>
                    {postItemData._count.comments}{' '}
                    {postItemData._count.comments > 1 ? 'Comments' : 'Comment'}
                </p>
            </button>

            {show && (
                <div className="flex flex-col gap-3">
                    <p>Comments ({postItemData._count.comments})</p>
                    <div className="flex items-center gap-2">
                        <textarea
                            className="resize-none rounded-[7px] bg-neutral-700 px-2 py-1"
                            name="comment"
                            id=""
                            placeholder="Leave a comment..."
                            cols="70"
                            rows="2"
                            value={comment}
                            onChange={handleCommentTextarea}
                        ></textarea>
                        <button
                            className="rounded-[7px] bg-blue-500 p-2"
                            onClick={handleCommentPost}
                        >
                            Send
                        </button>
                    </div>
                    <CommentList postId={itemId} />
                </div>
            )}
        </div>
    )
}

export default PostItem
