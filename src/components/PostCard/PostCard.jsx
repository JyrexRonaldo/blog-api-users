import { Link } from 'react-router-dom'
import { useState } from 'react'
import Comment from '../Comment/Comment'
import commentIcon from '/commentIcon.svg'
import readIcon from '/read.svg'
import CommentList from '../CommentList/CommentList'
import { useNavigate } from 'react-router-dom'

function PostCard({
    authorName,
    dateCreated,
    postTitle,
    commentsNumber,
    postId,
}) {
    const navigate = useNavigate()

    const [show, setShow] = useState(false)

    const handleCommentDisplay = () => {
        setShow(!show)
    }

    const handlePostItemDisplay = () => {
        navigate(`/${postId}`)
    }

    return (
        <div className="flex flex-col gap-3 rounded-[12px] bg-neutral-800 p-5.5">
            <div className="flex gap-3.5">
                <p className="text-[0.8rem] font-extrabold">{authorName}</p>
                <p className="text-[0.8rem] font-extralight">{dateCreated}</p>
            </div>
            <Link to={`/${postId}`}>
                <p className="text-4xl font-bold">{postTitle}</p>
            </Link>

            <div className="flex gap-3.5 font-extralight">
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
                        {commentsNumber}{' '}
                        {commentsNumber > 1 ? 'Comments' : 'Comment'}
                    </p>
                </button>
                <button
                    className="flex gap-1.5"
                    onClick={handlePostItemDisplay}
                >
                    <img
                        className="h-auto w-3.5"
                        src={readIcon}
                        alt="comment icon"
                    />
                    <p>Read</p>
                </button>
            </div>

            {show && (
                <div className="flex flex-col gap-3">
                    <p>Comments ({commentsNumber})</p>
                    <div className="flex items-center gap-2">
                        <textarea
                            className="resize-none rounded-[7px] bg-neutral-700 px-2 py-1"
                            name=""
                            id=""
                            placeholder="Leave a comment..."
                            cols="70"
                            rows="2"
                        ></textarea>
                        <button className="rounded-[7px] bg-blue-500 p-2">
                            Send
                        </button>
                    </div>
                    <CommentList postId={postId} />
                </div>
            )}
        </div>
    )
}

export default PostCard
