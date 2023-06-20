import "../searchmuseum/styles/searchmuseumStyle.css";
import { FilterContext } from "../searchmuseum//hooks/filter-context";
import { useContext } from "react";

const MuseumProfile = () => {
    const { rating, category } = useContext(FilterContext);
    return(
        <div className="card">
            <img
            className="museum-Img"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Field_Museum_of_Natural_History.jpg/1280px-Field_Museum_of_Natural_History.jpg"
            />
            <h1>Field Museum of Natural History</h1>
            {rating}
            {category}
        </div>
    )
}

export default MuseumProfile;
