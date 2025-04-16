function Comment({ author, createdAt, comment }) {
    return (
        <div>
            <div className="flex gap-3 text-[11px]">
                <p>{author}</p>
                <p>{createdAt}</p>
            </div>
            <p className="text-[14px]">{comment}</p>
            <hr className="mt-2 border-neutral-700" />
        </div>
    )
}

export default Comment
