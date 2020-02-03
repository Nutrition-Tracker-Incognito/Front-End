import { createContext, useState } from "react"

let userState

const User = createContext({ user: null, loading: false })

export const UserProvider = ({ value, children }) => {
  const [user, setUser] = useState()

}