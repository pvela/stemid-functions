const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp(functions.config().firebase);
const db = admin.firestore();

 exports.bloomcallback = functions.https.onRequest((request, response) => {

      const token = '0x8f31e48a585fd12ba58e70e03292cac712cbae39bc7eb980ec189aa88e24d043';
  //console.log(JSON.stringify(request.body.data));
  console.log('token '+request.body.token);
	const bloomed= db.collection('bloomed').doc(token);
	bloomed.get().then(doc => {
		if (doc) {
			bloomed.set({age:40});
		}
		});
      //response.json({status:true,token: request.body.token});
      response.json({status:true,token:'0x8f31e48a585fd12ba58e70e03292cac712cbae39bc7eb980ec189aa88e24d043'});
 });
