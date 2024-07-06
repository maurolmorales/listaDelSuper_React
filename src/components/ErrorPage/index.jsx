import { useRouteError } from "react-router-dom";
const ErrorPage = () => {
  const error = useRouteError();
  console.log(error);
  return ( 
    <section id="error-page">
      <h1>Sorry, an unexpecter error has occurred</h1>
      <i>{error.statusText || error.message}</i>
    </section>

   );
}
 
export {ErrorPage};