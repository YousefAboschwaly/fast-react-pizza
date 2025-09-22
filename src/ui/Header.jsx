import { Link } from "react-router-dom";
import Search from "../features/order/SearchOrder";
import Username from "../features/user/Username";

export default function Header() {
  return (
    <header className="bg-yellow-500 uppercase tracking-widest">
      <Link to="/">Fast React Pizza Co.</Link>
      <Search />
      <Username/>
    </header>
  );
}
