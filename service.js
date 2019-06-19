const AssistantV1 = require('ibm-watson/assistant/v1');

const assistant = new AssistantV1({

  version: '2019-02-28',
  iam_apikey: 'w5gVfFDSyeDAVfQVqQSGls3DE2rgLIkCvpphICNzPP63',
  url: 'https://gateway.watsonplatform.net/assistant/api'
  // username: process.env.WATSON_USERNAME,
  // password: process.env.WATSON_PASSWORD,
  // url:      process.env.WATSON_URL,
  // version:  process.env.WATSON_VERSION
});

exports.getMessage = body =>
  new Promise((resolve, reject) => {

    assistant.message(
      {
        workspace_id: '0e3176ad-7e5e-48aa-ba51-1cdae76a41d2',
        input: { text: body.input }
      },
      function(err, response) {
        if (err) {
          console.log(err);
          reject(err);
        } else {
          resolve(response);
        }
      }
    );
  });
