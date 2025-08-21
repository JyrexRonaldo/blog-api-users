import { useState, useEffect } from 'react'
import Comment from '../Comment/Comment'
import commentIcon from '/commentIcon.svg'
import { useParams, Link, useNavigate } from 'react-router-dom'
import CommentList from '../CommentList/CommentList'
import Textarea from '../Textarea/Textarea'
import NavBar from '../NavBar/NavBar'
import { format } from 'date-fns'

const usePostItemData = (postId, newComment, deletedCommentId) => {
    const [postItemData, setPostItemData] = useState(null)
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetch(`${import.meta.env.VITE_HOME_DOMAIN}/${postId}`)
            .then((response) => {
                if (response.status >= 400) {
                    throw new Error('server error')
                }
                return response.json()
            })
            .then((response) => setPostItemData(response))
            .catch((error) => setError(error))
            .finally(() => setLoading(false))
    }, [postId, newComment, deletedCommentId])

    return { postItemData, error, loading }
}

function PostItem() {
    const [deletedCommentId, setDeletedCommentId] = useState(null)
    const [newComment, setNewComment] = useState(null)
    const [comment, setComment] = useState('')

    const [show, setShow] = useState(true)

    const { itemId } = useParams()

    const navigate = useNavigate()

    const handleCommentDisplay = () => {
        setShow(!show)
    }

    const handleCommentTextarea = (e) => {
        setComment(e.target.value)
    }

    const handleCommentPost = async () => {
        try {
            const response = await fetch(
                `${import.meta.env.VITE_HOME_DOMAIN}/:${itemId}/comments`,
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
            setComment('')
            setNewComment({ ...data })
        } catch (error) {
            console.log(error)
        }
    }

    const { postItemData, error, loading } = usePostItemData(
        itemId,
        newComment,
        deletedCommentId
    )

    if (loading)
        return (
            <div className="mt-52 flex items-center justify-center text-white">
                <p>Loading...</p>
            </div>
        )
    if (error)
        return (
            <div className="mt-52 flex items-center justify-center text-white">
                <p>A network error was encountered</p>
            </div>
        )

    const createdAt = format(new Date(postItemData.createdAt), 'MMMM dd, yyyy')

    const handleGoBack = () => {
        navigate('/')
    }

    return (
        <>
            <NavBar>
                <div className="mt-2 self-center">
                    <div className="flex justify-end">
                        {/* <p className="text-3xl">Create a Post</p> */}
                        <button
                            className="rounded-[8px] bg-blue-600 px-3.5 py-1"
                            onClick={handleGoBack}
                        >
                            Go Back!
                        </button>
                    </div>
                    <div className="mt-2 flex max-w-180 flex-col gap-3 self-center rounded-[12px] bg-neutral-800 p-5.5">
                        <p className="text-4xl font-extrabold">
                            {postItemData.title}
                        </p>
                        <div className="flex gap-4">
                            <p>{postItemData.author.username}</p>
                            <p>Posted on: {createdAt}</p>
                        </div>
                        <p>{postItemData.body}</p>
                        <button
                            onClick={handleCommentDisplay}
                            className="flex cursor-pointer items-center gap-1.5"
                        >
                            <img
                                className="h-auto w-3.5"
                                src={commentIcon}
                                alt="comment icon"
                            />
                            <p>
                                {postItemData._count.comments}{' '}
                                {postItemData._count.comments > 1
                                    ? 'Comments'
                                    : 'Comment'}
                            </p>
                        </button>
                        {show && (
                            <div className="flex flex-col gap-3">
                                <p>Comments ({postItemData._count.comments})</p>
                                <Textarea
                                    textBoxValue={comment}
                                    textFieldHandler={handleCommentTextarea}
                                    sendButtonHandler={handleCommentPost}
                                    placeholderText={'Leave a comment...'}
                                ></Textarea>
                                <CommentList
                                    postId={itemId}
                                    newComment={newComment}
                                    deletedCommentId={deletedCommentId}
                                    setDeletedCommentId={setDeletedCommentId}
                                />
                            </div>
                        )}
                    </div>
                </div>
            </NavBar>
        </>
    )
}

export default PostItem
