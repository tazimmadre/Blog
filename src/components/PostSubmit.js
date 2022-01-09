import React,{useState} from "react";
import useToken from "../utils/useToken";
import witter from "../apis/witter";
const PostSubmit=({setMessage,message,setStatus,status})=>{
  const {token} =useToken();
  const [namee, setNamee] = useState(false);
    const changeHandler = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setMessage({ ...message, [name]: value });
  };

const handleSubmit = (e) => {
  e.preventDefault();
  setNamee(true);
  witter
    .post(
      "/post",
      { ...message },
      {
        headers: {
          Authorization: `Bearer ${token?.token}`,
        },
      }
    )
    .then((response) => {
      setStatus(!status);
      setNamee(false);
      // window.location.reload();
    })
    .catch((err) => {
      console.log(err);
      setNamee(false);
    });
};
  return (
    <article class="media">
      <figure class="media-left">
        <p class="image is-64x64">
          <img className="avatar" src="/images/avatar.png" />
        </p>
      </figure>
      <div class="media-content">
        <div class="field">
          <p class="control">
            <textarea
              class="textarea"
              name="message"
              onChange={changeHandler}
              placeholder="What's happening?"
            ></textarea>
          </p>
        </div>
        <nav class="level">
          <div class="level-right">
            <div class="level-item">
              <button
                class={
                  namee
                    ? "button button-signin spacing is-info control is-medium is-loading"
                    : " button button-signin spacing is-info"
                }
                onClick={handleSubmit}
              >
                Submit
              </button>
            </div>
          </div>
        </nav>
      </div>
    </article>
  );
}


export default PostSubmit;