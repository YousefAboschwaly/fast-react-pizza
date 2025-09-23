import { Link } from "react-router-dom";
import Search from "../features/order/SearchOrder";
import Username from "../features/user/Username";

export default function Header() {
  return (
    <header className="border-b border-stone-200 bg-yellow-400 px-4 py-3 tracking-widest uppercase sm:px-6 flex items-center justify-between">
      <Link to="/">Fast React Pizza Co.</Link>
      <Search />
      <Username />
    </header>
  );
}
