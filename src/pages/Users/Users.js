import "./Users.scss"

import { useEffect, useState } from "react"

import SendRequest from "../../database/SendRequest"

export default function Users() {
  const requstUrl = "https://jsonplaceholder.typicode.com/users"
  const [dataFromServer, setDataFromServer] = useState([])

  useEffect(() => {
      SendRequest("GET", requstUrl)
        .then((data) => setDataFromServer(data))
        .catch((err) => console.log(err))
  }, [])

  return(
    <main className="main">
      
    </main>
  )
}
