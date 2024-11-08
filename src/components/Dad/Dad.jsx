import Brother from "./Brother";
import Myself from "./Myself";
import Sister from "./Sister";

export default function Dad({asset}) {
  return (
    <div>
        <h2>Dad</h2>
        <Myself asset={asset}/>
        <Sister/>
        <Brother/>
    </div>
  )
}
