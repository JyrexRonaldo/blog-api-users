import PostCard from '../PostCard/PostCard'
import PostItem from '../PostItem/PostItem'

function Posts() {
    return (
        <div className="mt-13 flex w-180 flex-col gap-5 self-center">
            {/* <h1 className="text-4xl font-extrabold">Posts</h1> */}
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

            {/* <PostItem
                authorName={'admin'}
                dateCreated="March 22, 2025"
                postTitle="Test post"
                commentsNumber={7}
                postBody="Lorem Ipsum Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            /> */}
        </div>
    )
}

export default Posts
