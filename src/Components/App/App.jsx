import { Link, Outlet } from "react-router-dom"
import styles from "./App.module.css"


function App() {
  

  return (
    <>
      <div className={styles.app}>
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
