import React, { useEffect, useState } from "react";
import "./Suggestion.css";
import axios from "axios";
import Comment from "../Comment/Comment";

const Suggestions = () => {
  const [commentdata, setcommentdata] = useState("Lorem ipsum dolor sit amet.");
  const [displayComment, setdisplayComment] = useState(false);
  const [listOfSuggestions, setlistOfSuggestions] = useState([]);

  useEffect(() => {
    try {
      axios
        .get("http://localhost:3000/")
        .then((response) => {setlistOfSuggestions(response.data);console.log(response.data)});
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <>
      <div className="suggestion">
        {listOfSuggestions.map((value, index) => {
          return <div key={value.id} className="description">
            {value.description}
          </div>;
        })}
      </div>
      ;
      {/* <button
          className="comment-btn"
          onClick={()=>setdisplayComment((prev) => !prev)}
        >
          comment
        </button> */}
      {/* {displayComment && <Comment comment={commentdata} />} */}
      <div className="suggestion-btn">
        <button className="btn">Suggestion...</button>
      </div>
    </>
  );
};

export default Suggestions;
