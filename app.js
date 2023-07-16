const fs=require("fs")
const data5=require("./data5")
const yargs = require("yargs")

yargs.command({
    command:"add",
    describe:"ay",
    handler:(x)=>{data5.addPerson(x.id,x.fname,x.lname,x.age,x.city)}
})

yargs.command({
    command:"delete",
    describe:"this command for deleting items",
    handler:(x)=>{data5.deletedData(x.id)}
})
yargs.command({
command:"read",
describe:"this commad is used for reading data",
builder:{
    id:{
    demandOption:true,
    type:"string"
}},
handler:(x)=>{
    data5.readData(x.id)
    console.log(x)
}
})
yargs.command({command:"list",handler:()=>{data5.listData()}})
console.log(yargs.argv)
