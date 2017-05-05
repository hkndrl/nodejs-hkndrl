
var fs=require('fs');

function  WriteFile(filename,content){
  fs.writeFile(filename,content,function(err){
    if (err) {
      console.log("Hata!");
    }
  else {
    console.log("Okay!");
  }
})
}

function  ReadFile(filename){
  fs.readFile(filename,"utf-8",function (err,data){
  if (err) {
    console.log("Okuyamadık");
  }
  else {
    console.log(data);
  }
  })
}

module.exports={
  WriteFile,
  ReadFile
}
