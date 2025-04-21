import PostCard from '../PostCard/PostCard'
import PostItem from '../PostItem/PostItem'
import PostDataContext from '../PostDataContext/PostDataContext'
import { useContext } from 'react'
import CommentList from '../CommentList/CommentList'

function Posts() {
    const { commentsData, postsData, error, loading } =
        useContext(PostDataContext)

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

    function getCommentCountByPostId(postId) {
        let commentCount = 0
        commentsData.forEach((comment) => {
            if (comment.postId === postId) {
                commentCount++
            }
        })
        return commentCount
    }

    const postCards = postsData.map((post) => {
        return (
            <PostCard
                key={post.id}
                authorName={post.author.username}
                dateCreated={post.createdAt}
                postTitle={post.title}
                commentsNumber={getCommentCountByPostId(post.id)}
                postId={post.id}
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
