//set the local storage in a new way 
let db={}

const addToDb=item=>{
    
    //check if the data is already in database or local storage
    const storedTracker =localStorage.getItem('cheka-tracker')
     if(storedTracker){
         db=JSON.parse(storedTracker)
     }
    
    //check if data is available is db object
    if(item in  db){
        db[item]=db[item]+1
    }else{
        db[item]=1
    }
    localStorage.setItem('cheka-tracker',JSON.stringify(db))
}

addToDb('lolu')
console.log(db);