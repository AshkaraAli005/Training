import axios from "axios";
import { message } from "antd";
import React, { useState ,useEffect } from "react";

const DashboardContents = () => {
  const [postData, setPostData] = useState([]);
   
  const apiTest = () => {
    axios
      .get("https://course-api.com/react-useReducer-cart-project")
      .then((response) => {
        const datas = [];
        for (let key in response.data) {
          datas.push({ ...response.data[key], id: key });
        }
        setPostData(datas);
        console.log(datas);
      })
      .catch((err) => { message.error(err.message); console.log(err.message)});

  };
  useEffect(() => {
    apiTest()
  
    return () => {
      console.log("retured data")
    }
  }, [])
  
  const onClickHandler = (id) =>{
    console.log(id)
   }
  
  return (
    <div className="App">
      
      {postData.map((post) => {
        return <Post key={post.id} data={post} postClicked={()=>{onClickHandler(post.title)}} />;
      })}
    </div>
  );
};
export default DashboardContents;

const Post = (props) => {
  return (
    <div style={{display:"flex" , flexDirection:"row"}} >
    <div
      style={{
        border: "1px solid black",
        width: "400px",
        height: "400px",
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
      }}
      onClick={props.postClicked}
    >
      <img src={props.data.img} style={{ height: "300px", width: "300px" }} />
      <h2>{props.data.title}</h2>
      <p>{props.data.price}</p>
    </div>
    </div>
  );
};
