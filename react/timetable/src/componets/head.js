import User from "./userTable"

const Head =(prop)=>
{
  const s=()=>
  {
      console.log("S is working");
  
  }
   const a="Title in side the head"
    return <div>
            {/* <h2>{a}</h2> here we are printing the 'a' */}
            {/* here prop.t means When componet is used that time variable is passed as attribute */}
            <h2 align="center"><marquee>{prop.t}</marquee></h2>
            <button type="button" onClick={s}>ShowTable</button>
            
        </div>
}
export default Head;