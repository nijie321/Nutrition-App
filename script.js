var admin = require("firebase-admin")

var serviceAccount = require("./secretKey.json");

admin.initializeApp({
	credential: admin.credential.cert(serviceAccount),
	databaseURL: "https://memphiseats-19d06.firebaseio.com"
})

let db = admin.firestore();

let FieldValue = admin.firestore.FieldValue;

const args = process.argv.slice(2);
const UID = args[1];

async function getKeys(REF){
	let data = [];
	await REF.get()
	.then(doc => data = Object.keys(doc.data()))
	.catch(err => console.log(err))
	return data;
}

const getFavoriteKeys = (REF) => {
	return getKeys(REF);
}
const getOrderKeys = (REF) => {
	return getKeys(REF);
}

function deleteFromDB(keys,REF){

	keys.map(key =>{
		REF.update({
			[key]: FieldValue.delete()
		})
		.then(_ => console.log("update successfully"))
		.catch(err => console.log(err))
	})
}
async function deleteFromOrder(){
	let REF = db.collection('order').doc(UID);
	let keys = await getOrderKeys(REF);
	console.log(keys);
	deleteFromDB(keys,REF);
}

async function deleteFromFavorite(){
	let REF = db.collection('favorite').doc(UID);
	let keys = await getFavoriteKeys(REF);
	deleteFromDB(keys,REF);
}

function executeScript(){
	switch(args[0]){
		case 'delete-favorite':
			deleteFromFavorite();
			break;
		case 'delete-order':
			deleteFromOrder();
			break;
		default:
			console.log(`sorry, ${args[0]} is not a valid argument.`);
	}
}

executeScript();