import PostCard from '../PostCard/PostCard'
import PostItem from '../PostItem/PostItem'
import PostDataContext from '../PostDataContext/PostDataContext'
import { useContext } from 'react'
import CommentList from '../CommentList/CommentList'

function Posts() {
    const {
        postsData,
        error,
        loading,
        setNewComment,
        setDeletedCommentId,
        deletedCommentId,
        newComment,
    } = useContext(PostDataContext)
    if (loading)
        return (
            <div className="mt-52 flex items-center justify-center">
                <p>Loading...</p>
            </div>
        )
    if (error)
        return (
            <div className="mt-52 flex items-center justify-center">
                <p>A network error was encountered</p>
            </div>
        )

    console.log(postsData)

    const postCards = postsData
        .sort((a, b) => (a.createdAt > b.createdAt ? 1 : -1))
        .map((post) => {
            return (
                <PostCard
                    key={post.id}
                    authorName={post.author.username}
                    dateCreated={post.createdAt}
                    postTitle={post.title}
                    commentsNumber={post._count.comments}
                    postId={post.id}
                    setNewComment={setNewComment}
                    setDeletedCommentId={setDeletedCommentId}
                    deletedCommentId={deletedCommentId}
                    newComment={newComment}
                />
            )
        })

    return (
        <div className="mt-2 flex w-180 flex-col gap-5 self-center">
            <h1 className="text-4xl font-extrabold">Posts</h1>
            {postCards}
        </div>
    )
}

export default Posts
