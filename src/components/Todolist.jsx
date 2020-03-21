import React from "react";

function Todolist({
     item, remind, done ,props,items,id,handleChange}) {
  return (
    <div>
      <input type="checkbox" checked={done} 
          onChange={()=> handleChange(id)}
      />
      {item}
      <p>{remind}</p>
    </div>
  );
}

export default Todolist;
