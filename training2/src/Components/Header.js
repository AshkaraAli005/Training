import React from "react";
import { Layout, Image } from "antd";
const { Header } = Layout;

function Headers() {
  return (
    <Layout>
      <div>
        <Header theme="light" className="header">
          <div className="header-div1">
            <Image
              src="niyamaimg.png"
              alt="Logo"
              preview={false}
              style={{ width: "200px", height: "auto", marginRight: 10 }}
            />
          </div>
        </Header>
      </div>
    </Layout>
  );
}

export default Headers;
