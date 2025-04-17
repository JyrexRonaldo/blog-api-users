import { useState } from 'react'
import { Link, Outlet, useNavigate } from 'react-router-dom'

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
            <button
                className="cursor-pointer rounded-[10px] border border-neutral-600 p-2 disabled:opacity-0"
                onClick={handleLogOutButton}
            >
                Log out
            </button>
        )
    } else {
        logOutButton = (
            <button
                disabled
                className="cursor-pointer rounded-[10px] border border-neutral-600 p-2 disabled:opacity-0"
                onClick={handleLogOutButton}
            >
                Log out
            </button>
        )
    }

    return (
        <div className="flex h-screen flex-col bg-neutral-900 text-white">
            <nav className="flex h-20 items-center justify-around">
                <Link to="/">
                    <p className="text-3xl font-extrabold text-blue-500">
                        OdinBlog
                    </p>
                </Link>
                {logOutButton}
            </nav>
            <Outlet />
        </div>
    )
}

export default App
