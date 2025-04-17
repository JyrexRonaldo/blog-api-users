import { Link, Outlet, useNavigate } from 'react-router-dom'

function App() {
    const navigate = useNavigate()
    const handleLogOutButton = () => {
        localStorage.clear()
        navigate("/login")
        
    }


    return (
        <div className="flex h-screen flex-col bg-neutral-900 text-white">
            <nav className="flex h-20 items-center justify-around">
                <Link to="/">
                    <p className="text-3xl font-extrabold text-blue-500">
                        OdinBlog
                    </p>
                </Link>
                <button className="cursor-pointer rounded-[10px] border border-neutral-600 p-2" onClick={handleLogOutButton}>
                    Log out
                </button>
            </nav>
            <Outlet />
        </div>
    )
}

export default App
