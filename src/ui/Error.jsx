import { useRouteError } from "react-router-dom";
import ButtonLink from "./ButtonLink";

function Error() {
  const error = useRouteError();
  console.log(error);

  return (
    <div className="px-4 py-3">
      <h1>Something went wrong 😢</h1>
      <ButtonLink to={-1}>&larr; Go back</ButtonLink>
    </div>
  );
}

export default Error;
