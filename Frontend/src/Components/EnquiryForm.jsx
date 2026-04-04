import React, { useState } from 'react';



const EnquiryForm=()=>{
    const [form,setForm]=useState({
        name:"",
        phone:"",
        cement:"",
        quantity:"",
        message:""
    });

    const handleChange=(e)=>{
        setForm({
            ...form,[e.target.name]:
            e.target.value
        });
    };

    const handleSubmit=async(e)=>{
        e.preventDefault();
     
        //save enquiry to Mongodb
        const response=await fetch(
            "http://localhost:8000/api/enquiry/add",{
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(form)
        });
        if(!response.ok){
            alert("Failed to send enquiry");
            return;
        }

        //send to whatsapp
        const whatsappNumber="919092208303";
        const text=
       ` Hello Annamalaiyar Traders,
        %OA +
        Name:${form.name}%OA+
         Phone:${form.phone}%OA+
         Cement:${form.cement}%OA+
        Quantity:${form.quantity}%OA+
        Message:${form.message}`;

        window.open(`https://wa.me/${ whatsappNumber}?text=${encodeURIComponent(text)}`,
        "_blank"
    );

    //Reset form
    setForm({
        name:"",
         phone:"",
        cement:"",
        quantity:"",
        message:""

    });
};

  return (
   <section id="enquiry"className='enquiry'>
    <h2>Send Enquiry</h2>
    <form className='enquiry-form'
    onSubmit={handleSubmit}>
     <input name='name'
     placeholder='Your Name'
     value={form.name}
     onChange={handleChange} required
 />

         <input name='phone'
     placeholder='Phone Number'
     value={form.phone}
     onChange={handleChange} required
 />


    <input name='cement'
     placeholder='cement Brand'
     value={form.cement}
     onChange={handleChange} required
 />


     <input name='quantity'
     placeholder='Quantity(bags)'
     value={form.quantity}
     onChange={handleChange} required
 />

     <textarea
      name='message'
     placeholder='Additional Message(optional)'
     value={form.message}
     onChange={handleChange}
 />

 <button type='submit'>Send Enquiry via whatsapp</button>

    </form>
   </section>

  );
};
export default EnquiryForm;



