import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page" className="w-100 text-center">
      <h1>Oops!</h1>
      <p>An Error detected</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}