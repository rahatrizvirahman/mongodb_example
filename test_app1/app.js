var mongoose=require('mongoose');
var Schema = mongoose.Schema;
var con ;
var userSchema= new Schema({
  userid: {type:String, required:true, trim:true,index:true,unique:true},
  chips: {type:Number}
});

var userModel = mongoose.model('users',userSchema);
var alex = new userModel({userid:'Alex',chips:10000,regdate:Date.now});
var cb = function(err){
  if(!err)
    console.log("Connection Opened");
  else
    console.log("Connection Opened Failed");
  };
mongoose.connect("mongodb+srv://user1:<987654321>@cluster0-t11g2.mongodb.net/test?retryWrites=true&w=majority",{
  useNewUrlParser: true,
  useUnifiedTopology: true 
},cb);
con = mongoose.connection;
alex.save(function(err,alex){
  if(err){
    console.log(err);
  }else{
    console.log("Document Save Done");
  }

});