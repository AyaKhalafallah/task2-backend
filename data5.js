fs=require("fs")
const addPerson=(id,fname,lname,age,city)=>{
    const allData=loadInfo()
    const duplicatedData=allData.filter((obj)=>{
        return obj.id===id
    })
    if (duplicatedData.length==0){
    allData.push({id:id,fname:fname,lname:lname,age:age,city:city})
    saveAllData(allData)
}
else{console.log("Erorr duplicated data")}
}
const loadInfo=()=>{
    try{
const dataJson=fs.readFileSync("data.json").toString()
    return JSON.parse(dataJson)
    }
    catch{
        return[]
    }
  
}

const saveAllData=(allData)=>{
  const saveAllDataJson=JSON.stringify(allData)
    fs.writeFileSync("data.json",saveAllDataJson)
}

const deletedData=(id)=>{
    const allData=loadInfo()
    const dataToKeep=allData.filter((obj)=>{
        return obj.id!==id
    })
    saveAllData(dataToKeep)
    console.log("you deleted data")
}

// reading data

const readData=(id)=>{
const allData =loadInfo()
const itemNeeded=allData.find((obj)=>{
    return obj.id==id
})
console.log(itemNeeded)}

// listing data
 const listData=()=>{const allData=loadInfo()
allData.forEach((obj) => {
    console.log(obj.fname,obj.lname,obj.city)
    
});}


module.exports={addPerson,deletedData,readData,listData}
