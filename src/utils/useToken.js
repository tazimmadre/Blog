import { useState } from "react";

export default function useToken(){
    const getToken=()=>{
      const tokenString= sessionStorage.getItem("auth");
      const userToken= JSON.parse(tokenString);
      return userToken;
    }

    const [token,setToken]= useState(getToken());

    const saveToken=(userToken,user)=>{
      sessionStorage.setItem("auth",JSON.stringify({token:userToken,user:user}));
      setToken(userToken);
    }

    const removeToken=()=>{
      sessionStorage.removeItem("auth");
      setToken("");
    }
    return {
      setToken:saveToken,
      token:token,
      clearToken:removeToken
    }
};


// export const signout = () => {
//   localStorage.removeItem("auth");
//   return true;
// };
