function Alert() { 
  const handleclick = () => { 
    alert('Welcome to LJU'); 
  }; 
  return ( 
    <div> 
      <center> 
        <button onClick={handleclick()}>Click me</button> 
      </center> 
    </div> 
  ); 
} 
export default Alert;