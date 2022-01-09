import React, { useState, useEffect } from "react";
import witter from "../apis/witter";
import useToken from "../utils/useToken";
const Posts=({posts,setStatus,status})=>{
  const {token}= useToken();
  const [namee,setNamee]= useState(false);
  const deleteHandler=(e)=>{
      setNamee(true);
    const { id } = e.target;
    witter.delete(`/post/${id}`,{
       headers: {
            Authorization: `Bearer ${token?.token}`,
          }
    }).then((res)=>{
      setNamee(false);
      setStatus(!status);
      console.log(res);
      // window.location.reload();
    }).catch((e)=>{
      console.log(e);
      setNamee(false);

    });
  };
  const renderdata=()=>{
    return posts && posts.map((x)=>{
      return (
        <div class="media" key={x._id}>
          <figure class="media-left">
            <p class="image is-64x64">
              <img src="https://bulma.io/images/placeholders/128x128.png" />
            </p>
          </figure>
          <div class="media-content">
            <div class="content">
              <p>
                <strong>John Smith</strong> <small>@johnsmith</small>{" "}
                <small>{"2 hrs ago"}</small>
                <br />
                {x.message}
              </p>
            </div>
            <nav class="level is-mobile">
              <div class="level-left">
                <a class="level-item">
                  <span class="icon is-small">
                    <i class="fas fa-reply"></i>
                  </span>
                </a>
                <a class="level-item">
                  <span class="icon is-small">
                    <i class="fas fa-retweet"></i>
                  </span>
                </a>
                <a class="level-item">
                  <span class="icon is-small">
                    <i class="fas fa-heart"></i>
                  </span>
                </a>
              </div>
            </nav>
          </div>
          <div class="media-right">
            <button class="delete" onClick={deleteHandler} id={x._id}></button>
          </div>
        </div>
      );
    })
  }
    return(
      <>
        {renderdata() }
      </>
    );
}

export default Posts;