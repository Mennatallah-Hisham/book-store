
// store key, value to localstorage
export function storeInLocaleStorage(key,value){

    localStorage.setItem(key,JSON.stringify(value));


};


// return arr if exists, else set key to inital val

export function getKeyValueFromLocalStorage(key ,initialVal){

    if(!localStorage.getItem(key)){

    
        localStorage.setItem(key,initialVal);
    }
        return JSON.parse(localStorage.getItem(key));
    
   

  

}


//return book from arr

// export function getItemFromLocalStorage(key,Id){
//     if(localStorage.getItem(key)){
//         const arr =JSON.parse( localStorage.getItem(key));
//         const existingItem = arr.find(i=>i.id===Id);
//        return existingItem;
//     }
//     return null;
     
// }

// check if book exists in arr
// export function ItemExistsInLocaleStorage(key,Id){

//     if(localStorage.getItem(key)){
//         const arr = localStorage.getItem(key);
//         const existingItem = arr.find(i=>i.id===Id);
//       if(existingItem){
//         return true;
//       }
//       else{
//         return false;
//       }
     
//     }
//     return false;
// }
