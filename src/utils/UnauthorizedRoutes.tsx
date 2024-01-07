import { Navigate, Outlet } from "react-router-dom";

//constants
import PAGES from "../constants/PAGES";

export default function UnauthorizedRoutes(props : {token: string}){
    const {token} = props;

    return(
        token ? <Navigate to={PAGES.HOME}/> : <Outlet/>
    )
}