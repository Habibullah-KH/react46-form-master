
import { useContext } from "react";
import Cousin from "../Cousin/Cousin";
import { MoneyContext } from "../Grandpha/Grandpha";
const Anty = () => {
    const [money, setMoney] = useContext(MoneyContext)
    return (
        <div>
            <h1>Anty</h1>
            <section className="flex">
                <Cousin name={'Mamshad'}></Cousin>
                <Cousin name={'Rubaiya'}></Cousin>
            </section>
<p>Money: {money}</p>
<button onClick={() => setMoney(money +1000)}>Add 1k taka</button>
        </div>
    );
};

export default Anty;