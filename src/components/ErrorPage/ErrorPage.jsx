import { Link } from "react-router-dom";

function ErrorPage() {
    return (
    <div>
      <h1>Oh no, this route doesn&#039;t exist!</h1>
      <Link to="/">
        You can go back to the home page by clicking here, though!
      </Link>
    </div>
  );
}

export default ErrorPage