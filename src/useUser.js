import { useContext } from "react";
import { UserContext } from "./App";

const useUser = () => {
  const { user, setUser } = useContext(userContext);
  return { user, setUser };
};
