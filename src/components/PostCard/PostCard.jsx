function PostCard(authorName, dateCreated, postTitle, commentsNumber) {
    return (
        <>
            <p>{authorName}</p>
            <p>{dateCreated}</p>
            <p>{postTitle}</p>
            <p>
                {commentsNumber} {commentsNumber > 1 ? 'Comments' : 'Comment'}
            </p>
        </>
    )
}

export default PostCard
