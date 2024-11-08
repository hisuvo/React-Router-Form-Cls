import { useContext } from "react"
import { AssetContext } from "../../Garndpa/Grandpa"

export default function Uncledaughter() {
  const gift = useContext(AssetContext)
  return (
    <div>
      <h2>Uncledaughter is my big Sister</h2>
      <h4>{gift}</h4>
    </div>
  )
}
