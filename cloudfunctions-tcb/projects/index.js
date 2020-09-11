'use strict';
const db = uniCloud.database();
const projects = db.collection('projects');
exports.main = async (event, context) => {
	//event为客户端上传的参数
	console.log('event : ', event)
	const res = await projects.doc(event.id).get()
	//返回数据给客户端
	return res
};
