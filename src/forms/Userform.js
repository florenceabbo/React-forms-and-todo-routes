import React,{useState} from 'react'

function Userform(){
    const[firstName,setFirstName]= useState('')
    const[lastName,setLastName]= useState('')
    
    const[password, setPassword] = useState('')
    const[error, setError] =useState(false)
    const[email, setEmail] = useState('')


    const handleSubmit =(e) =>{
      e.preventDefault();
      if(!firstName || !lastName|| !email || !password){
        setError(true)
      } else {
        console.log("FirstName:", firstName,"\nLastName:", lastName,"\nEmail:", email,"\npassword:",password);
        setFirstName('');
        setLastName('');
        setPassword('');
        setEmail('')
      }      
    }
    
    return(
         <>
         <form className='forma' onSubmit={handleSubmit}>
          <div>
          <h1 className='header'>Registration form</h1>
          </div>
         <div>
          <label className='label1'>Enter FirstName:</label>
           <input id='place' placeholder='Enter fisrt name' className='inputform' value={firstName} onChange={e =>setFirstName(e.target.value)}/>
           {error && firstName.length <=8?
           <label>Firstname can't empty</label>:""}
         </div>
        
         <div>
         <label className='label1'> Enter LastName:</label>
           <input id='place' placeholder='Enter last name' className='inputform' value={lastName} onChange={e =>setLastName(e.target.value)}/>
           {error && lastName.length <=8?
         <label>Lastname can't empty</label>:""}
         </div>
         <div>
         <label className='label1'>Enter your Email:</label>
          <input id='place' placeholder='Enter your Email' className='inputform' value={email} onChange={e =>setEmail(e.target.value)}/>
          {error && password.length <=8?
          <label>Email can't empty</label>:""}
         </div>
         <div>
         <label className='label1'>Enter your password:</label>
          <input id='place' placeholder='Enter your password'type='password' value={password} className='inputform' onChange={e =>setPassword(e.target.value)}/>
          {error && password.length <=8? 
           <label>password can't empty</label>:""}
         </div>
         <div>
          <button className='button1' type='submit'>Submit</button>
         </div>
         </form>
         </>
    )
    }
    export {Userform}