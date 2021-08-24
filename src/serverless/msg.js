require("dotenv").config();
const axios = require("axios");

const req = async () => {
  const res = await axios(process.env.APIURL, {
    method: "GET",
  });
  return res.data;
};

exports.handler = async event => {
  console.log("queryStringParameters", event.queryStringParameters);
  try {
    const data = await req();
    return {
      statusCode: 200,
      body: JSON.stringify({ data }),
    };
  } catch (error) {
    return { statusCode: 500, body: JSON.stringify({ error }) };
  }
};
