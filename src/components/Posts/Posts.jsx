import PostCard from '../PostCard/PostCard'

function Posts() {
    return (
        <div className="mt-13 flex w-180 flex-col self-center gap-5">
            <h1 className="text-4xl font-extrabold">Posts</h1>
            <PostCard
                authorName={'jyrex'}
                dateCreated={'March 22, 2025'}
                postTitle={'Test post'}
                commentsNumber={34}
            />
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
