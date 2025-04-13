import { Link, Outlet } from 'react-router-dom'

function App() {
    return (
        <div className="flex h-screen flex-col bg-neutral-900 text-white">
            <nav className="flex h-20 items-center justify-around">
                <Link to="/">
                    <p className="text-3xl font-extrabold text-blue-500">
                        OdinBlog
                    </p>
                </Link>
                <button className="cursor-pointer rounded-[10px] border border-neutral-600 p-2">
                    Log out
                </button>
            </nav>
            <Outlet />
        </div>
    )
}

export default App
