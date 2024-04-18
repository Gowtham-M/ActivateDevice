import React , { useState }from 'react';
import { useNavigate } from 'react-router-dom';

// Define a functional component named MyComponent
const Home = () => {
    const [inputValue, setInputValue] = useState('');
    const navigate = useNavigate(); 

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
      };
      const handleSubmit = () => {
        // Here you can save the input data into a variable or perform any other necessary actions
        const inputData = inputValue;
        navigate('/endpage', { inputData });
      };
  return (
    <div>
      <div style={{ display: "flex"}}>
        <div style={{ width: "100%", backgroundColor: "skyblue", height:"200px", textAlign:'center', padding:'20px', fontSize:"60px",  alignItems: "center" }}>Activate Device</div>
      </div>
      <div style={{fontSize:"50px",  textAlign:'center'}}>Activate Your Device</div>
      <div style={{fontSize:"50px",  textAlign:'center'}}>Follow the steps to Login Device</div>
      <div style={{fontSize:"50px",  textAlign:'center'}}>Please enter the code below</div>
      <div style={{ marginTop:"20px", textAlign:'center'}}><input type="text" style={{width:"700px", height:"55px", fontSize:"30px"}} value={inputValue} onChange={handleInputChange} /></div>
      <div style={{textAlign:'center', marginTop:"20px"}}><button type="submit" style={{width:"150px", height:"60px", fontSize:"30px", backgroundColor:"lightblue"}}  onClick={handleSubmit}>Submit</button></div>
    </div>
  );
};

// Export the component to make it available for other parts of your application
export default Home;
