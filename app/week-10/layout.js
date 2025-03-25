import { AuthContextProvider } from "./_util/auth-context";
 
export default function Layout({ children }) {
  return <AuthContextProvider>{children}</AuthContextProvider>;
}