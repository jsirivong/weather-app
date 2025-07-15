import { Link } from "react-router-dom";
// the "Link" component acts as a link by routing the user to the given "to" property, which takes in a path

export default function NotFound(){
    return (
        <div className="bg-gray-950 text-center">
            <h1 className="mt-75 text-center text-white text-5xl font-bold">Page Not Found (404)</h1>
            <Link to={"/"}>
                <button className="text-white text-2xl font-bold my-5 hover:underline hover:text-gray-300">Return</button>
            </Link>
        </div>
    )
}