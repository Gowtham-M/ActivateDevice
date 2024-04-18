import React from 'react';

// Define a functional component named MyComponent
const Endpage = () => {
    const phoneNumber = '1234567890';
    console.log()
  return (
    <div>
      <div style={{fontSize:"80px", textAlign:"center", marginTop:"30px", fontFamily:"Aclonica", color:"skyblue"}}>Success!</div>
      <div style={{fontSize:"40px", textAlign:"center", marginBottom:"40px"}}>Activating Device</div>
      <div style={{fontSize:"30px", textAlign:"center", marginBottom:"40px"}}>Next step - Call support line to know the current status</div>
      <div style={{marginLeft:"42%"}}><div style={{fontSize:"30px",fontWeight:"bold", textAlign:"center", width:"250px",height:"50px", backgroundColor:"skyblue"}}>8054199332</div></div>
      <div style={{fontSize:"30px", textAlign:"center", marginBottom:"70px", marginTop:"70px"}}>Click above to call for instant details</div>
      <div style={{ borderBottom: '3px solid black', width:"700px", marginLeft:'29%' }}></div>
      <div style={{fontSize:"40px", textAlign:"center", marginTop:"70px", marginBottom:"70px"}}>Activate your device without key</div>
      <div style={{marginLeft:"42%"}}><div style={{fontSize:"30px",fontStyle:"bold", textAlign:"center", width:"250px",height:"50px", backgroundColor:"skyblue", fontWeight:"bold"}}><a href={`tel:${phoneNumber}`}>8054199332</a></div></div>
    </div>
  );
};

// Export the component to make it available for other parts of your application
export default Endpage;
