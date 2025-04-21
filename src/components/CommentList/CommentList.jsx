import { useContext } from 'react'
import Comment from '../Comment/Comment'
import PostDataContext from '../PostDataContext/PostDataContext'

function CommentList({ postId }) {
    const { commentsData, error, loading } = useContext(PostDataContext)

    const currentPostComments = commentsData.filter(
        (comment) => comment.postId === postId
    )

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

    const commentCards = currentPostComments.map((comment) => {
        console.log(comment, 'comment list line 51')
        return (
            <Comment
                key={comment.id}
                author={comment.author.username}
                createdAt={comment.createdAt}
                comment={comment.comment}
                commentId={comment.id}
                postId={comment.postId}
            />
        )
    })

    return <div>{commentCards}</div>
}

export default CommentList
