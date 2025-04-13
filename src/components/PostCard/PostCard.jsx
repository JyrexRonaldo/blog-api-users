import { Link } from 'react-router-dom'

function PostCard({ authorName, dateCreated, postTitle, commentsNumber }) {
    return (
        <div className="flex flex-col gap-3 rounded-[12px] bg-neutral-800 p-5.5">
            <div className="flex gap-3.5">
                <p className="text-[0.8rem] font-extrabold">{authorName}</p>
                <p className="text-[0.8rem] font-extralight">{dateCreated}</p>
            </div>
            <p className="text-4xl font-bold">{postTitle}</p>
            <div className="flex gap-3.5 font-extralight">
                <p>
                    {commentsNumber}{' '}
                    {commentsNumber > 1 ? 'Comments' : 'Comment'}
                </p>
                <Link to="#">Read</Link>
            </div>
        </div>
    )
}

export default PostCard
