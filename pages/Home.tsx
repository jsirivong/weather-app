import "../css/Title.css"
import SearchBar from "../components/SearchBar.tsx"

export default function Home(){
    return (
        <div>
            <h1 className="website-title">
                Weather App
            </h1>
            <h3>Search for any city's weather.</h3>
            <SearchBar/>
        </div>
    );
}