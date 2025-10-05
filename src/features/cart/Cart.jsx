import ButtonLink from "../../ui/ButtonLink";
import Button from "../../ui/Button";
import CartItem from "./CartItem";
import { useDispatch, useSelector } from "react-redux";
import { clearCart, getCart } from "./cartSlice";
import { getUser } from "../user/userSlice";
import EmptyCart from './EmptyCart';


function Cart() {
  const dispatch = useDispatch()
  const {userName} = useSelector(getUser)
  const cart = useSelector(getCart);

if(cart.length ===0) return<EmptyCart/>

  return (
    <div className="px-4 py-3">
      <ButtonLink
        to="/menu"
        className="text-sm text-blue-500 hover:text-blue-600 hover:underline"
      >
        &larr; Back to menu
      </ButtonLink>

      <h2 className="mt-7 text-xl font-semibold">Your cart, {userName}</h2>
      <ul className="mt-3 divide-y divide-stone-200 border-b  border-stone-200">
        {cart.map((item) => (
          <CartItem item={item} key={item.key} />
        ))}
      </ul>

      <div className="mt-6 space-x-2">
        <Button to="/order/new" type={"primary"}>
          Order pizzas
        </Button>
        <Button type={"secondary"} onClick={()=>dispatch(clearCart())}>Clear cart</Button>
      </div>
    </div>
  );
}

export default Cart;
