
import './App.css';
import Navbar from './components/Navbar/Navbar';
import React,{useState,useEffect} from 'react';


function App() {
  const [name,setName] = useState('');
  const [userName,setUsername] = useState('');
  const [followers, setfollowes] = useState('');
  const [userInput, setuserInput] = useState('');
  const [error,setError]= useState('');

  useEffect(() => {
    fetch(" https://api.github.com/users")
    .then(res => res.json())
    .then(data => {
      
        setData(data);
      
      
    });
   
  }, []);

  const setData =({name,login,followers}) =>{
    setName(name);
    setUsername(login);
    setfollowes(followers);
    

  };

  const handleSearch =(e)=> {
    setuserInput(e.target.value)
  }

  const handleSubmit =()=>

  {
    fetch(` https://api.github.com/users/${userInput}`)
    .then(res=>res.json())
    
    .then(data=> {
      if (data.message) {
        setError(data.message)
        console.log(data.message);
      }
      else{
        setError(null);
      setData(data);
      }
    })
  }

  
  return (
    <div >
     <Navbar></Navbar>
     <div className="body" >
       <img src="./Top.JPG" alt="top"></img>

     </div>
     <div className="white">
      <div className="search">
       <input type="text" placeholder="Search.." onChange={handleSearch}></input><button type="submit" ><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
</svg></button>
<button type="submit"  onClick={handleSubmit}>submit</button>
</div>
{ error ? (<h1>{error}</h1>) : (
  <div className="result">
  <div> {name}</div>
  <div>{userName}</div>
  <div>{followers} followers</div>
  </div>
  
      
) }
 </div>
      </div>


  );
}

export default App;
