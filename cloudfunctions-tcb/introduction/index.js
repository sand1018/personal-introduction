'use strict';
const db = uniCloud.database();
const introduction = db.collection('introduction');
exports.main = async (event, context) => {
	//event为客户端上传的参数
	console.log('event : ', event)
	const res = await introduction.doc(event.id).get()
	//返回数据给客户端
	return res
};
