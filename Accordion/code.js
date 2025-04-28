import React, { useState } from "react";

function Accordion({ items }) {
    const [activeIndex, setActiveIndex] 
    = useState(null);
    const [show, setShow] = useState(false)
    const [triggered, setTriggered] = useState(null);
    const handleChange = (id) => {
        setTriggered(id)
        if(triggered == id) {
          setShow(!show)
        }
        else {
          setShow(true)
        }
    }

    return (
        <div>
          {
            items.length > 0 ? items.map((item, id) => (
                <div key={id}>
                  <button onClick = {() => handleChange(id)} >{item.title}</button>
                  {show && id == triggered && <p>{item.content}</p>}
                </div>
            ))
            : <div>No items available.</div>
          }
        </div>
    );
}

export default Accordion;
