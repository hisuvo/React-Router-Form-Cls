import { useContext } from "react";
import Auntydaughter from "./Auntykids/Auntydaughter";
import Auntyson from "./Auntykids/Auntyson";
import { MoneyContext } from "../Garndpa/Grandpa";

export default function Aunty({asset}) {
  const [money, setMoney] = useContext(MoneyContext)
  return (
    <div>
        <h2>Aunty</h2>
        <div>
        <Auntyson/>
        <Auntydaughter asset={asset}/>
        </div>
        <button onClick={()=>setMoney(money + 1000)}>money:{money}</button>
    </div>
  )
}
