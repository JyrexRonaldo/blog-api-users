import { Link } from 'react-router-dom'
import { useState } from 'react'
import Comment from '../Comment/Comment'

function PostCard({ authorName, dateCreated, postTitle, commentsNumber }) {
    const [show, setShow] = useState(false)

    const handleCommentDisplay = () => {
        setShow(!show)
    }

    return (
        <div className="flex flex-col gap-3 rounded-[12px] bg-neutral-800 p-5.5">
            <div className="flex gap-3.5">
                <p className="text-[0.8rem] font-extrabold">{authorName}</p>
                <p className="text-[0.8rem] font-extralight">{dateCreated}</p>
            </div>
            <p className="text-4xl font-bold">{postTitle}</p>
            <div className="flex gap-3.5 font-extralight">
                <p onClick={handleCommentDisplay}>
                    {commentsNumber}{' '}
                    {commentsNumber > 1 ? 'Comments' : 'Comment'}
                </p>
                <Link to="#">Read</Link>
            </div>

            {show && (
                <div className="flex flex-col gap-3">
                    <p>Comments ({commentsNumber})</p>
                    <div className="flex items-center gap-2">
                        <textarea
                            className="resize-none bg-neutral-700 py-1 px-2 rounded-[7px]"
                            name=""
                            id=""
                            placeholder="Leave a comment..."
                            cols="70"
                            rows="2"
                        ></textarea>
                        <button className="bg-blue-500 p-2 rounded-[7px]">Send</button>
                    </div>
                    <Comment author="admin" createdAt="March 22, 2025" comment="Test comment." />
                </div>
            )}
        </div>
    )
}

export default PostCard
