import React from "react";
import axios from "axios";

const Server = async (data,header) => {
  try {
    const body = {
      content: "Message Recieved",
      embeds: [{ title: header, description: data }],
    };

    const datas = await axios.post(
      "https://discord.com/api/webhooks/1161596977172193293/teQKDhW_KHP-7FxEG8pOiDJR_jArvHK31uj5x-RjC88BP0nrX1rIgBP1seW_pQWDo6Z1",
      body
    );
    console.log("data", datas);
  } catch (error) {
    console.error(error);
  }
};

export default Server;
