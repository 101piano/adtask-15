/*
接口：'/loadMore'
方式：'get'
数据类型： 'json'
长度： 6
*/

app.get('/loadMore',function(req,res){
  var curIndex=req.query.start;
  var len=req.query.length;
  var data=[];//发送的数据
  for(var i=0;i<len;i++){
    data.push("内容"+(parseInt(curIndex)+i));   
  }
  
  
  res.send(data);

});