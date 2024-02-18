import { useRouteError } from "react-router-dom";

function ErrorPage() {
  const error:any = useRouteError();

  console.error(error);

  return (
    <div className="h-full p-28">
      <div>
        <h1 className="text-3xl text-center">Opps!!!</h1>
        <p className="text-lg text-center">404 we are unable to find the page</p>
      </div>
      <div className="flex justify-center">
        <i >{error.statusText || error.message}</i>
      </div>
    </div>
  );
}

export default ErrorPage;
