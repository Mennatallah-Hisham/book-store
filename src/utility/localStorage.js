

export function storeInLocaleStorage(key,value){

    localStorage.setItem(key,value);


};


export function getFromLocalStorage(key){
    if(localStorage.getItem(key)){
        return localStorage.getItem(key);
    }

    return "notFound";
}
export function existsInLocaleStorage(key,Id){

    if(localStorage.getItem(key)){
        const arr = localStorage.getItem(key);
        const existingItem = arr.find(i=>i.id===Id);
       return existingItem;
     
    }
    return false;
}