import { useState } from "react"
import { useNavigate } from "react-router-dom"

export default function Search() {
    const [query, setQuery] = useState("")
    const navigate = useNavigate()

function handleSubmit(e){
  e.preventDefault()
  navigate(`/order/${query}`)
  setQuery("")

}
    
  return (
    <form onSubmit={handleSubmit}>
      <input value={query} onChange={(e)=>setQuery(e.target.value)} />
    </form>
  )
}
