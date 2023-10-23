import { Link, Outlet } from "react-router-dom";
import logo from "./assets/Metallica_logo.png";

function RootElement() {
  return (
    <>
      <header>

      <img src={logo} alt="logo" style={{marginLeft:"30rem",marginTop:"5rem" ,width:"30rem "}}/>
        <nav style={{display:"flex", justifyContent:"center", marginTop:"1rem", gap:"2rem", fontSize:"1.2rem"}}>
          
          <Link to='/vocal' >Vocal</Link>   
          <Link to='/guitar'>Guitar</Link>    
          <Link to='/bass'>Bass</Link>   
          <Link to='/drum'>Drum</Link>  
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default RootElement;
