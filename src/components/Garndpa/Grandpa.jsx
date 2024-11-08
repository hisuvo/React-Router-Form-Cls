import { createContext, useState } from "react";
import Aunty from "../Aunty/Aunty";
import Dad from "../Dad/Dad";
import Uncle from "../Uncle/Uncle";

export const AssetContext = createContext("Gold Ring");
export const MoneyContext = createContext(1000);

export default function Grandpa() {
    const [money, setMoney] = useState(1000)
    const asset = "Diamont ring";
  return (
    <div >

        <h2>Grand Father</h2>
        <button>{money}</button>

        <MoneyContext.Provider value={[money, setMoney]}>

            <AssetContext.Provider value="Gold Ring">

                <div id="grandpa">
                    <Dad asset={asset}/>
                    <Uncle/>
                    <Aunty asset={asset}/>
                </div>

            </AssetContext.Provider>

        </MoneyContext.Provider>
        
    </div>
  )
}
