var fullname="Sanjay Rai"

var obj={
     fullname:"Raj Rai",

    prop:{
       fullname:"Inside Props",
       getfullname:function(){
        return this.fullname
       },
    },

    getfullname:function(){
        return this.fullname
    },

    getfullnameV2:()=> this.fullname,

    getfullnameV3:(function(){
        return this.fullname
    })(),
};

console.log(obj.prop.getfullname());
console.log(obj.getfullname());
console.log(obj.getfullnameV2());
console.log(obj.getfullnameV3()); 
console.log(obj.getfullnameV3);
