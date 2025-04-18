import deleteIcon from '/trash.svg'

function Comment({ author, createdAt, comment, commentId, postId }) {
    const handleDelete = async () => {
        try {
            const response = await fetch(
                `http://localhost:3000/${postId}/comments/${commentId}`,
                {
                    method: 'DELETE',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        commentId,
                    }),
                }
            )
            const data = await response.json()
            console.log(data)
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div>
            <div className="flex justify-between">
                <div>
                    <div className="flex gap-3 text-[11px]">
                        <p>{author}</p>
                        <p>{createdAt}</p>
                    </div>
                    <p className="text-[14px]">{comment}</p>
                </div>
                <div className="flex gap-3.5">
                    <button>Edit</button>
                    <button onClick={handleDelete}>
                        <img
                            className="h-auto w-3.5"
                            src={deleteIcon}
                            alt="comment-icon"
                        />
                    </button>
                </div>
            </div>
            <hr className="mt-2 border-neutral-700" />
        </div>
    )
}

export default Comment
