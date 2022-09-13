require('dotenv').config({path: "./hellosign.env"});
const hellosign = require("hellosign-sdk")({ key: process.env.HELLOSIGN_API_KEY });


const getEmbedURL = async (inspector_email,inspector_name, client_email, client_name)=>{
  let options = {
    test_mode: 1,
    clientId: process.env.HELLOSIGN_CLIENT_ID,
    template_id: process.env.TEMPLATE_ID,
    subject: 'Inspector Form',
    signers: [
      {
        email_address: inspector_email,
        name: 'Inspector',
        role: process.env.SIGNER_ROLE_NAME
      }
    ],
    custom_fields: {  //Merge fields defined in the template
      inspector_name: inspector_name,
      inspector_email: inspector_email,
      client_name: client_name,
      client_email: client_email
    }
  }

  // 1st create an embeded signature request using a template
  let response = await hellosign.signatureRequest.createEmbeddedWithTemplate(options);
  const get_SignReq= {
    signature_request_id: response["signature_request"]["signature_request_id"],
    test_mode: response["signature_request"]["test_mode"],
    title: response["signature_request"]["title"],
    custom_fields: response["signature_request"]["custom_fields"],
    files_url: response["signature_request"]["files_url"],
    details_url: response["signature_request"]["details_url"],
    signatures: response["signature_request"]["signatures"][0],
    statusCode: response["statusCode"]
  }
  console.log("GET signatureRequest:",get_SignReq);
  let signature_id = response.signature_request.signatures[0].signature_id;

  // 2nd fetch the url to embed specific for the first (and only) signer
  let embedded_resp = await hellosign.embedded.getSignUrl(signature_id);
  const get_SignUrl= {
    date: embedded_resp["resHeaders"]["date"],
    statusCode: embedded_resp["statusCode"]
  }
  console.log("GET SignUrl:",get_SignUrl);
  return [embedded_resp.embedded.sign_url, get_SignReq["signatures"]["signature_id"]];
}

module.exports = {
  getEmbedURL: getEmbedURL
};
