require('dotenv').config({path: "./hellosign.env"});
const hellosign = require("hellosign-sdk")({ key: process.env.HELLOSIGN_API_KEY });

const send_Esigns = async (basic_info)=>{
  let options = {
    test_mode: 1,
    clientId: process.env.HELLOSIGN_CLIENT_ID,
    template_id: process.env.TEMPLATE_ID,
    subject: 'Inspector Form',
    signers: [
      {
        email_address: basic_info.inspector.email,
        name: 'Inspector',
        role: process.env.SIGNER_ROLE_1
      },
      {
        email_address: basic_info.client.email,
        name: 'Client',
        role: process.env.SIGNER_ROLE_2
      }
    ],
    custom_fields: {  //Merge fields defined in the template
      inspector_name: basic_info.inspector.name,
      inspector_email: basic_info.inspector.email,
      client_name: basic_info.client.name,
      client_email: basic_info.client.email
    }
  }

  // 1st create an embeded signature request using a template
  // createEmbeddedWithTemplate
  let response = await hellosign.signatureRequest.sendWithTemplate(options);
  const post_SignReq= {
    signature_request_id: response["signature_request"]["signature_request_id"],
    test_mode: response["signature_request"]["test_mode"],
    title: response["signature_request"]["title"],
    custom_fields: response["signature_request"]["custom_fields"],
    files_url: response["signature_request"]["files_url"],
    details_url: response["signature_request"]["details_url"],
    signature_inspector: response["signature_request"]["signatures"][0],
    signature_client: response["signature_request"]["signatures"][1],
    statusCode: response["statusCode"]
  }
  console.log("POST signatureRequest:", post_SignReq);

  return {
    inspector: {
      email: basic_info.inspector.email,
      name: basic_info.inspector.name,
      role: process.env.SIGNER_ROLE_1,
      sign_id: post_SignReq.signature_inspector.signature_id,
      status: "Not sent."
    },
    client: {
      email: basic_info.client.email,
      name: basic_info.client.name,
      role: process.env.SIGNER_ROLE_2,
      sign_id: post_SignReq.signature_client.signature_id,
      status: "Not sent."
    }
  };
}

module.exports = {
  send_Esigns: send_Esigns
};
