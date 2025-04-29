import React, {useState} from "react";

function ContactForm() {
    const [formData, setFormData] = useState({
      name: "",
      email: "",
      message: ""
    })
  const [errors, setErrors] = useState({})
  const [showData, setShowData] = useState(false)
  const handleChange = (e) => {
    const {name, value} = e.target;
    setFormData({...formData, [name]: value})
    setErrors({
      ...errors, [name] : ""
    })
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }
     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if(!formData.email.trim()){
      newErrors.email = "Email is required";
    }
    else if(!emailRegex.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }
    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return; // Don't submit if there are errors
    }
    console.log(formData)
    setShowData(true);
  }
    return (
        <div>
          {
          !showData
            ?
           <form onSubmit={handleSubmit}>
             <label htmlFor="name">Name:</label>
             <input type="text" id="name" name='name' value={formData.name} onChange={handleChange}  style={{margin: "10px 5px"}} />
             <p style={{color: "red"}}>{errors.name}</p>
             <br/>
             <label htmlFor="email">Email:</label>
             <input type="email" id="email" name='email' value={formData.email} onChange={handleChange}  style={{margin: "10px 5px"}} />
             <p style={{color: "red"}}>{errors.email}</p>
             <br/>
             <label htmlFor="name">Message:</label>
             <textarea type="text"  name='message' id="message" value={formData.message} onChange={handleChange}  style={{margin: "10px 5px"}} />
<p style={{color: "red"}}>{errors.message}</p>
             <br/>
             <br/>
             <button type='submit'>Submit</button>
           </form>
            : <div>Thank you, {formData.name || "User"}</div>
          }
        </div>
    );
}

export default ContactForm;
