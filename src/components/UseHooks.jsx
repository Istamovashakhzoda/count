import React, {useState} from "react";

const UseHooks = () =>{
  const [count, setCount] = useState(0);
  return(
      <div>
     
     <div style={{display:"flex", justifyContent:"center"}}>
      <h1>Count:{count}</h1>
     </div>
      
     
     
      <button
      style={{padding:"10px 20px",
      border:"2px",
      // justifyContent:"center",
      marginTop:"70px",
       marginLeft:"10px"}}
      onClick={()=> setCount(count+1)}
      >Add
      </button>
      <button
      style={{padding:"10px 20px",
      border:"2px",
      // justifyContent:"center",
      marginTop:"70px",
       marginLeft:"10px"}}
      onClick={()=> setCount(0)}
      >Resent
      </button>
      <button
      style={{padding:"10px 20px",
      border:"2px",
      // justifyContent:"center",
      marginTop:"70px",
      marginLeft:"10px"}}
      onClick={()=> setCount(count-1)}
      >DisAdd
      </button>
      <div className="mood" style={{width:"100%", margin:"50px auto",display:"flex"}}>
        <h3>Dark</h3>
        <h3>Light</h3>
        </div>
     </div>
  );
}

export default UseHooks;