import { useSelector } from "react-redux";

export default function Username() {
const {userName} = useSelector((store)=>store.user)
if(!userName) return null;
  return <div className="text-sm font-semibold hidden md:block">{userName}</div>;
}
