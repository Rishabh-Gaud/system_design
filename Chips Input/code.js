import React, { useState } from "react";

function ChipsInput() {
  const [chips, setChips] = useState([]);
  const handleKeyDown = (e) => {
  if (e.key === "Enter") {
    e.preventDefault(); 
    handleSubmit(e);    
  }
};
  const handleSubmit = (e) => {
    let chip = e.target.value;
     chip = chip.trim()
    if (chip) {
      setChips((prevChips) => [...prevChips, chip]);
      e.target.value = ''; 
    }
  }
  const handleCancel = (id) => {
    setChips((prevChips) => prevChips.filter((_, index) => index !== id));
  }
  return (
    <div style={{display:"flex", flexDirection:"column",alignItems:"center", margin:"40px 0"}}>
      <h2>Chips Input</h2>
      <input
        type="text" 
        placeholder="Type a chip and press tag"
        style={{ padding: "8px", width: "200px" }}
        onKeyDown={handleKeyDown}
      />
      <div style={{display: "flex"}}>
        {
          chips.length > 0 && chips.map((chip, id) => (
            <div key={id} className="chip" style={{display: "flex", justifyContent: "center", alignItem: "center", background: "grey", borderRadius: "5px", height: "46px", margin: "5px"}}>
              <p style={{marginLeft: "5px", paddingLeft: "10px", color: "white"}}>
                {chip}
              </p>
              <p onClick={() => handleCancel(id)} style={{cursor: "pointer", marginLeft: "10px", marginRight: "5px", color: "white"}}>X</p>
            </div>
          ))
        }
      </div>
    </div>
  );
}

export default ChipsInput;
