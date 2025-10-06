/* eslint-disable no-unused-vars */
/* eslint-disable react-refresh/only-export-components */
import { useFetcher } from "react-router-dom";
import Button from "./../../ui/Button";
import { updateOrder } from "../../services/apiRestaurant";
export default function UpdateOrder({ order }) {
  const fetcher = useFetcher()
  return (
    <fetcher.Form  method="PATCH" className="text-right">
      <Button type={"primary"}>Make priority</Button>
    </fetcher.Form>
  );
}

export async function action({params}){
console.log("update")
const data = {priority:true}
await updateOrder(params.orderId,data)
return null
}
