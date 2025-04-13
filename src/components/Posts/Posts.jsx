import PostCard from '../PostCard/PostCard'

function Posts() {
    return (
        <div className="mt-13 w-180 self-center">
            <h1 className="text-4xl font-extrabold">Posts</h1>
            <PostCard
                authorName={'jyrex'}
                dateCreated={'March 22, 2025'}
                postTitle={'Test post'}
                commentsNumber={34}
            />
        </div>
    )
}

export default Posts
