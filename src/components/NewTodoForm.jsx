import { useState } from "react";

export function NewTodoForm(props){
  const [newItem, setNewItem] = useState("");
    //input function to handle adding todos
    function handleSubmit(e) {
      e.preventDefault();
      if(newItem === "") return

      props.onSubmit(newItem)
      //to clear input bar after submit
      setNewItem("");
    }
  return(
    <form onSubmit={handleSubmit} className="new-item-form">
    <div className="form-row">
      <label htmlFor="item">New Item</label>
      <input
        value={newItem}
        onChange={(e) => setNewItem(e.target.value)}
        type="text"
        id="item"
      />
    </div>
    <button className="btn">Add</button>
  </form>
  )
}
