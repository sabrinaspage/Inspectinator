

require('dotenv').config({path: "./hellosign.env"});
const hellosign = require("hellosign-sdk")({ key: process.env.HELLOSIGN_API_KEY });

/**
 * Sends the email chain of e-signatures starting w/ inspector
 * @param {json} basic_info - data for custom fields
 * @return {json} - important information from the signature request
 */
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
    request_id: post_SignReq.signature_request_id,
    inspector: {
      email: basic_info.inspector.email,
      name: basic_info.inspector.name,
      role: process.env.SIGNER_ROLE_1,
      sign_id: post_SignReq.signature_inspector.signature_id,
      status: "Incomplete."
    },
    client: {
      email: basic_info.client.email,
      name: basic_info.client.name,
      role: process.env.SIGNER_ROLE_2,
      sign_id: post_SignReq.signature_client.signature_id,
      status: "Incomplete."
    }
  };
}

/**
 * Determines the recipients that have successfully submited e-signatures
 * @param {string} request_id - request_id
 * @param {string} sign_1 - inspector signature_id
 * @param {string} sign_2 - client signature_id
 * @return {json} updated status(es)
 */
const check_Esigns = async (request_id, sign_1, sign_2)=>{
  let response = await hellosign.signatureRequest.get(request_id);
  let result= {
    inspector: {
      status: "Incomplete."
    },
    client: {
      status: "Incomplete."
    }
  }
  console.log(response.resHeaders.date);
  console.log(response.signature_request.response_data);
  let current=response.signature_request.response_data
  for(var i=0; i<current.length; i++)
  {
    if(current[i].type==="signature")
    {
      if(current[i].signature_id===sign_1)
        result.inspector.status="Complete!"
      else if(current[i].signature_id===sign_2)
        result.client.status="Complete!"
    }
  }
  console.log(result);
  return result;
}

module.exports = {
  send_Esigns: send_Esigns,
  check_Esigns: check_Esigns
};
