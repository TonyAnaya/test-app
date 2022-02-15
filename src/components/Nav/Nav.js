import './Nav.css';
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useLocalStorage } from "../../hooks/useLocalStorage";



function Nav() {
  const [token, saveToken]= useLocalStorage("TOKEN",{})
  const [user, saveUser]= useLocalStorage("USER",{})
  const navigate = useNavigate()

  document.body.style.backgroundImage = "url('https://www.teahub.io/photos/full/298-2987595_stock-market.png')";
  let dataExist = false
  let dataFotoExist = false

  let data = JSON.parse(window.localStorage.USER)
  if(data.name){
    dataExist = true
    
    document.title= data.name

  }else{
    dataExist = false
  }
  if(data.foto){
    dataFotoExist = true

  }else{
    dataFotoExist = false
  }


  return (
    <nav className="navbar navbar-expand-lg navbar-light">
      <div className="container-fluid">

        <img src="data:image/png;base64,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" className='fotito'></img>

        <NavLink className="nav-link" to="/">
        <h1>Sherpa Brokers</h1>
        </NavLink>
        <NavLink className="navbar-nav liga" to="/search">
          <div className="">Search</div>
        </NavLink>
        { dataExist && (
          <>
            <h1 >{data.name}</h1>
          </>
         )}
        { dataExist && (
          <div className="align-right" id="navbarSupportedContent">
            <a  href="" onClick={()=> {
              saveToken({})
              saveUser({})
              navigate("/login")
            }}> Log Out</a>
          </div>
         )}
         {!dataExist &&(
            <div className="align-right" id="navbarSupportedContent">
              <a  href="" onClick={()=> {
                saveToken({})
                saveUser({})
                navigate("/login")
              }}> Log In</a>
            </div>
         )}
         
      </div>
  </nav>
  );
}

export {Nav};