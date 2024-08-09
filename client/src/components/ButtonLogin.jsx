import { useAuth0 } from "@auth0/auth0-react";

const ButtonLogin = () => {
    const {loginWithRedirect} = useAuth0()
  return (
      <div>
          <button className="bg-sky-400 text-slate-50 w-max py-3 px-12 mx-4 rounded-full font-bold shadow-xl shadow-blue-950/30 hidden md:block cursor-pointer" onClick={() => loginWithRedirect()}>Login</button>
    </div>
  )
}

export default ButtonLogin