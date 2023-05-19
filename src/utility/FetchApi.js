export const getBooks = async(url)=>{
    try{

      const res = await fetch(url);
      if(!res.ok){
        throw new Error ("something went wrong");

      }
      const data = await res.json();
      return data;
    

    }catch(e){
      console.log(e);
    }

  };
export const getBookDetails = async(url)=>{
    try{

      const res = await fetch(url);
      if(!res.ok){
        throw new Error ("something went wrong");

      }
      const data = await res.json();
  
      return data;
      
    

    }catch(e){
      console.log(e);
    }

  };
