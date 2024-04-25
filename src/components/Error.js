import { useRouteError } from "react-router-dom";
const Error=()=>{
    const err=useRouteError();
    console.log(err);
    return(
        <div>
            <h3>OOPS</h3>
            <h4>This is a error page</h4>
            <h4>{err.status}:{err.statusText}</h4>
        </div>
    )
}

export default Error;