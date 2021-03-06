import axios from "axios";
import moment from "moment";
import URLEncode from "urlencode";
import Base64 from "crypto-js/enc-base64";
import hmacSHA256 from "crypto-js/hmac-sha256";


export function getDingDingSignFromSecret(secret){
  
  const timestamp=moment().toDate().getTime();

  const origin_sign=[timestamp,secret].join("\n");
  const hmacSHA256_sign=Base64.stringify(hmacSHA256(origin_sign,secret));
  const encode_sign=URLEncode(hmacSHA256_sign);

  return {timestamp,sign:encode_sign};
}

export async function push_message({url,access_token,timestamp,sign,data}){
  const result=await axios({
    url,
    data,
    method:"POST",
    params:{access_token,timestamp,sign},
  });
  return result.data;
}