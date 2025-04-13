import { Link, Outlet } from 'react-router-dom'

function App() {
    return (
        <>
            <div  >
                <nav>
                    <Link to="/">
                        <p>OdinBlog</p>
                    </Link>
                    <button>Log out</button>
                </nav>
                <Outlet />
            </div>
        </>
    )
}

export default App
