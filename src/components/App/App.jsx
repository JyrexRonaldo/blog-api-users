import { useState, useEffect } from 'react'
import { Link, Outlet, useNavigate } from 'react-router-dom'
import PostDataContext from '../PostDataContext/PostDataContext'

import logOutIcon from '/log-out.svg'

const usePostsData = () => {
    const [commentsData, setCommentData] = useState(null)
    const [postsData, setPostsData] = useState(null)
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        async function fetchData() {
            try {
                const postResponse = await fetch('http://localhost:3000/')
                const commentsResponse = await fetch(
                    'http://localhost:3000/comments'
                )

                if (postResponse.status >= 400) {
                    throw new Error('post server error')
                }

                if (commentsResponse.status >= 400) {
                    throw new Error('comment server error')
                }

                const postData = await postResponse.json()
                const commentData = await commentsResponse.json()

                setPostsData(postData)
                setCommentData(commentData)
            } catch (error) {
                setError(error)
            } finally {
                setLoading(false)
            }
        }
        fetchData()
    }, [])

    return { commentsData, postsData, setCommentData, setPostsData, error, loading }
}

function App() {
    const [loginStatus, setLoginStatus] = useState(true)

    let logOutButton = null

    const navigate = useNavigate()
    const handleLogOutButton = () => {
        localStorage.clear()
        navigate('/login')
        setLoginStatus(false)
    }

    if (loginStatus) {
        logOutButton = (
            <button onClick={handleLogOutButton}>
                <img
                    className="h-auto w-5.5 cursor-pointer"
                    src={logOutIcon}
                    alt="edit-icon"
                />
            </button>
        )
    } else {
        logOutButton = (
            <button disabled onClick={handleLogOutButton}>
                <img
                    className="h-auto w-5.5 cursor-pointer"
                    src={logOutIcon}
                    alt="edit-icon"
                />
            </button>
        )
    }

    const postOutletData = { ...usePostsData() }

    return (
        <div className="flex h-full flex-col bg-neutral-900 pb-20 text-white">
            <nav className="flex h-20 items-center justify-around">
                <Link to="/">
                    <p className="text-3xl font-extrabold text-blue-500">
                        OdinBlog
                    </p>
                </Link>
                {logOutButton}
            </nav>
            <PostDataContext.Provider value={postOutletData}>
                <Outlet />
            </PostDataContext.Provider>
        </div>
    )
}

export default App
