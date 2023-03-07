import React,{useState}  from 'react';



function Textareaform() {
  const [textarea, setTextarea] = useState();
  const[error, setError] =useState(false) 
  
  const handleSubmit =(e)=>{
    e.preventDefault();
    // if( !textarea){
    //     setError(true)
    //   }
      if(textarea)
    console.log(`textarea:${textarea}`);
    setTextarea('')
  }

  const handleChange = (event) => {
    setTextarea(event.target.value)
  }

  return (
    <form className='formc' onSubmit={handleSubmit}>
        <h2>Briefily eleborate about your programming experience </h2>
        <div>
      <textarea id='place' placeholder='Leave a comment' className='textarea' value={textarea} onChange={handleChange} />
     
      {/* <label>Textarea can't be epmty</label>  */}
      </div>
      <button className='button3'>Submit</button>
    </form>
  )
}
export{Textareaform}