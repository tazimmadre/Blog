import React,{useEffect,useState} from "react";
import Hero from "./Hero";
import Posts from "./Posts";
import PostSubmit from "./PostSubmit";
import useToken from "../utils/useToken";
import witter from "../apis/witter";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const Home=()=>{
  const { token,setToken } = useToken();
  const [data,setData]= useState([]);
  const [message, setMessage] = useState({ message: "" });
  const [status ,setStatus]= useState(false);
  useEffect(()=>{
       witter.get("posts", {
        headers: {
          Authorization: `Bearer ${token.token}`,
        }
      }).then((r)=>{
        setData(r.data.posts);
      }).catch((e)=>{
          console.log(e);
      });
  },[status]);
  const renderdata=()=>{
  if(token){
    return (
      <div className="box posts">
        <PostSubmit
          setMessage={setMessage}
          setStatus={setStatus}
          status={status}
          message={message}
        />
       {data.length>0? <Posts posts={data} setStatus={setStatus} status={status} />:<Skeleton count={20}/>}
      </div>
    );
  }
  else{
    return <Hero />;
  }};
  return(<>
    {renderdata()}
  </>
    );
}

export default Home;