import { createContext } from "react";

export const AuthContext = createContext();

const AuthProvider = ({ Children }) => {
  return <AuthContext.Provider value={{}}>{Children}</AuthContext.Provider>;
};
export default AuthProvider;
