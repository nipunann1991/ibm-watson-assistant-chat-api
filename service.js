const AssistantV1 = require('ibm-watson/assistant/v1');

const assistant = new AssistantV1({

  version: process.env.WATSON_VERSION,
  iam_apikey:  process.env.WATSON_API_KEY,
  url: process.env.WATSON_URL
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
