import { useDispatch } from "react-redux";
import Button from "../../ui/Button";
import { increaseItemQuantity, reduceItemQuantity } from "./cartSlice";

export default function UpdateItemQuantity({pizzaId , quantity}) {
  const dispatch = useDispatch()
  return (
    <div className="flex items-center gap-2 md:gap-3">
      <Button type={"round"} onClick={()=>dispatch(reduceItemQuantity(pizzaId))}>-</Button>
      <span className="font-medium text-sm">{quantity}</span>
      <Button type={"round"} onClick={()=>dispatch(increaseItemQuantity(pizzaId))}>+</Button>
    </div>
  )
}
