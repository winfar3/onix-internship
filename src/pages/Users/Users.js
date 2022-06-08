import "./Users.scss"

import { useEffect, useState } from "react"

import UsersView from "./UsersView"
import SendAxiosRequest from "../../database/SendAxiosRequest"
import { usersRequestUrl } from "../../database/requestUrls";

export default function Users() {
  const [dataFromServer, setDataFromServer] = useState([])

  useEffect(() => {
    SendAxiosRequest(usersRequestUrl)
      .then((data) => setDataFromServer(data))
      .catch((err) => console.log(err))
  }, [])

  return(
    <UsersView 
      dataFromServer={dataFromServer}
    />
  )
}
