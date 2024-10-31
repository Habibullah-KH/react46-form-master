import { useContext } from "react";
import { AssetContext } from "../Grandpha/Grandpha";

const Special = () => {
    const gift = useContext(AssetContext);
    return (
        <div>
            <h2>Special</h2>
            <p>special: {gift}</p>
        </div>
    );
};

export default Special;