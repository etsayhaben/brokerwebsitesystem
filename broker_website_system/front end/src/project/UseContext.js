import { useContext } from "react";
import { ownerContext } from "./Keno";
export default function UseContext()
{
    const owner=useContext(ownerContext);
    return(
        <>
        {owner}
        </>
    );
}