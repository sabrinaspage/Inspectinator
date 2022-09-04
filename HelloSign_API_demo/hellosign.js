require('dotenv').config({path: "./hellosign.env"});
const hellosign = require("hellosign-sdk")({ key: process.env.HELLOSIGN_API_KEY });


const getEmbedURL = async (inspector_email,inspector_name)=>{
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
      inspector_email: inspector_email
    }
  }

  // 1st create an embeded signature request using a template
  let response = await hellosign.signatureRequest.createEmbeddedWithTemplate(options);
  let signature_id = response.signature_request.signatures[0].signature_id;

  // 2nd fetch the url to embed specific for the first (and only) signer
  let embedded_resp = await hellosign.embedded.getSignUrl(signature_id);
  return embedded_resp.embedded.sign_url;
}

module.exports = {
  getEmbedURL: getEmbedURL
};
