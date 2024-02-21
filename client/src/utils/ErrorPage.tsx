import { useRouteError } from "react-router-dom";

function ErrorPage() {
    const error: any = useRouteError();

    console.error(error);

    return (
        <div className="h-[100vh] p-28 flex flex-col justify-center dark:bg-[#191919] dark:*:text-white ">
            <div>
                <h1 className="text-4xl text-center">Opps!!!</h1>
                <p className="text-lg text-center">
                    404 we are unable to find the page
                </p>
            </div>
            <div className="flex justify-center">
                <i>{error.statusText || error.message}</i>
            </div>
        </div>
    );
}

export default ErrorPage;
