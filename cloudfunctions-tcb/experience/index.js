'use strict';
const db = uniCloud.database();
const experience = db.collection('experience');
exports.main = async (event, context) => {
	//event为客户端上传的参数
	console.log('event : ', event)
	const res = await experience.get()
	//返回数据给客户端
	return res
};
