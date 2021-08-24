exports.handler = async event => {
  console.log("queryStringParameters", event.queryStringParameters);
  return {
    statusCode: 200,
    body: JSON.stringify({ msg: "Hello, World!" }),
  };
};
