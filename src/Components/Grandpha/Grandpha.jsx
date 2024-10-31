import { createContext, useState } from "react";
import Anty from "../Anty/Anty";
import Dad from "../Dad/Dad";
import Uncle from "../Uncle/Uncle";
import './Grandpha.css'


export const AssetContext = createContext('gold');
export const MoneyContext = createContext(1000);

const Grandpha = () => {
    const [money, setMoney] = useState(1000);
    const asset = 'diamond';
    return (
        <div className="grandpha">
            <h2>Grandpa</h2>
            <AssetContext.Provider value={asset}>
                <MoneyContext.Provider value={[money, setMoney]}>
                    <section className="flex">
                        <Dad />
                        <Uncle />
                        <Anty />
                    </section>
                </MoneyContext.Provider>
            </AssetContext.Provider>
        </div>
    );
};

export default Grandpha;

/*
1. Create a context and export it 
2. add provider for the context with a value. value could be anything
3. useContext to access value in the context api
*/