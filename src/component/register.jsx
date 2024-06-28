import axios from "axios" ;
import { useState } from "react";
import {useNavigate} from 'react-router-dom';

function Reg(){
                const navigate = useNavigate();
               const[result,setResult]=useState(0);
                const[username,setUsername]=useState('');
                const[email,setEmail]=useState('');
                const[password,setPassword]=useState('');
                const[repassword,setRepassword]=useState('');
                const [error, setError] = useState(false);

                function handleUsername(e){
                    setUsername(e.target.value)
                }
                function handleEmail(e){
                    setEmail(e.target.value)
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
                                setResult({username,email,password,repassword})
                                setError(false);
                               navigate("/login") ;
                               axios.post('https://localhost:3000/register',{
                                username,
                                email,
                                password,
                               });
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
    
        
        <div class="box" style={{ border: '1px solid',
            borderRadius: '15px solid black',
            alignItems: 'center',
            alignContent: 'center',
            display: 'flex',
            flexDirection: 'column',
            gap: '20px',
            padding: '7px',backgroundColor:'yellowgreen',borderWidth:'7px',borderRadius:'7px'}}>
            <h2>Register</h2>

        <div class="box1" style={{ display: 'flex',flexDirection: 'column'}}>
            <label for="">Username</label>
        <input type="text"  placeholder="enter your name" onChange={handleUsername}/>
       

        
        </div>
        <div class="box1" style={{ display: 'flex',flexDirection: 'column'}}><label for="">Email</label>

    <input type="email" placeholder="enter your email" onChange={handleEmail}/>
    
    </div>
    <div class="box1" style={{ display: 'flex',flexDirection: 'column'}}>
        <label for="">Password</label>
    <input type="password"placeholder="enter your password" onChange={handlePassword}/>
    
    </div>
    <div class="box1" style={{ display: 'flex',flexDirection: 'column'}}>
        <label for="">Re-Password</label>

    <input type="password"placeholder="enter your re-password" onChange={handleRepassword}/>
    </div>
    
    <button style={{backgroundColor:'green'}} onClick={handleSubmit}>SIGN UP</button>
    
    </div>
     USERNAME = {result.username}<br/>
     EMAIL={result.email}<br/>
     PASSWORD={result.password}<br/>
     REPASSWORD={result.repassword}<br/>
     {error== true?<h1>Invalid</h1>:''}
</div>


     
    )
}
export default Reg;