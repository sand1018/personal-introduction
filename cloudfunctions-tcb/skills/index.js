'use strict';

const db = uniCloud.database();
const skills = db.collection('skills');
exports.main = async (event, context) => {
	//event为客户端上传的参数
	console.log('event : ', event)
	const res = await skills.doc(event.id).get()
	//返回数据给客户端
	return res
};
 