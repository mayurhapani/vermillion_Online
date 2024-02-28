import { createContext } from "react";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  return <AuthContext.Provider value={{ authenticated: true }}>{children}</AuthContext.Provider>;
};
export default AuthProvider;

// export const AuthContext = createContext();

// const AuthProvider = (props) => {
//   return <AuthContext.Provider value={{ authenticated: true }}>{props.children}</AuthContext.Provider>;
// };
// export default AuthProvider;
