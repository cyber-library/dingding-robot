/* eslint-disable no-undef */
const {getDingDingSignFromSecret,push_message}=require("../dist");

(async ()=>{
  const secret="SECb79cae377971c235853d1477e0a84ae2ebf39cc1a6523756c7b54717ca6fd538";
  const {timestamp,sign}=getDingDingSignFromSecret(secret);
  await push_message({
    url:"https://oapi.dingtalk.com/robot/send?access_token=7aad378aced633ce7a3180bb4725baacfc7ae603ddeb49c4ec2112cd845e55f4",
    timestamp,
    sign,
    data:{
      msgtype:"text",
      text:{
        content:"sdjkadjsahdjk"
      }
    }
  });
})();