import "./ErrorPage.css";
import { useRouteError, Link } from "react-router-dom";

function ErrorPage() {
  const error = useRouteError();
  console.log(error);

  return (
    <div className="error-page">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
      <br />
      <Link to={"/home"}>
        <div className="error-btn">Home</div>
      </Link>
    </div>
  );
}

export default ErrorPage;
