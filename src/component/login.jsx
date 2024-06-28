import { useState,useEffect } from 'react';
function Logi(){
                const[result,setResult]=useState(0);
                const[username,setUsername]=useState('');
                const[password,setPassword]=useState('');
                const[repassword,setRepassword]=useState('');
                const [error, setError] = useState(false);

                function handleUsername(e){
                    setUsername(e.target.value)
                }
                function handlePassword(e){
                    setPassword(e.target.value)
                }
                function handleRepassword(e){
                    setRepassword(e.target.value)
                }
                function handleSubmit(e){
                    
                        if(password==repassword)
                            {
                                setResult({username,password,repassword})
                                setError(false)

                            }
                            else
                            {
                                setError(true)
                            }

                    
                }

    return(
      
        <div class="login" style={{display:'flex',flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',marginTop:'20px'}}>
    
        
        <div class="box" style={{ border: '3px solid',
            borderRadius: '15px solid black',
            alignItems: 'center',
            alignContent: 'center',
            display: 'flex',
            flexDirection: 'column',
            gap: '8px',
            padding: '10px',backgroundColor:'greenyellow',borderWidth:'5px',borderRadius:'5px'}}>
            <h1>LOGIN</h1>

        <div class="box1" style={{ display: 'flex',flexDirection: 'column'}}>
            <label for="">Username</label>
        <input type="text"  placeholder="Enter Your Name" onChange={handleUsername}/>
       

        
        </div>
    <div class="box1" style={{ display: 'flex',flexDirection: 'column'}}>
        <label for="">Password</label>
    <input type="password"placeholder="Enter Your Password" onChange={handlePassword}/>
    
    </div>
    <div class="box1" style={{ display: 'flex',flexDirection: 'column'}}>
        <label for="">Re-Password</label>

    <input type="password"placeholder="Enter Your Re-password" onChange={handleRepassword}/>
    </div>
    
    <button style={{backgroundColor:'green'}} onClick={handleSubmit}>LOGIN</button>
    
    </div>
     USERNAME = {result.username}<br/>
     PASSWORD={result.password}<br/>
     REPASSWORD={result.repassword}<br/>
     {error== true?<h1>invalid</h1>:''}
</div>


     
    )
}
export default Logi;