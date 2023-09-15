import React from 'react'
import { Layout, theme, Typography,Image } from "antd";
const { Header, Content, Sider } = Layout;

function Headers() {
  return (
    <Layout>
    <div>
      <Header
        theme="light"
        style={{
          position: "fixed",
          top: 0,
          zIndex: 1,
          width: "100%",
          display: "flex",
          alignItems: "center",
          backgroundColor: "#ffffff",
          boxShadow: "1px 1px 10px  rgba(0,0,0,0.2) ",
          borderRadius: 7,
        }}
      >
        <div style ={{display:"flex" , alignItems:"center"}}>
        <Image src="niyamaimg.png" alt= "Logo" preview = {false} style={{width:"200px" , height:"auto" , marginRight:10}}/>
        </div>

      </Header>
    </div>
  </Layout>
  )
}

export default Headers