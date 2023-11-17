import React from 'react'
import { Link } from 'react-router-dom'

const LoginPage = () => {

        //condition based routing
        const navigate = useNavigate()
        const [inputField, SetInputField] = useState(
            {
                "email": "",
                "password": ""
            })
    
        const inputHandler = (event) => {
            SetInputField({ ...inputField, [event.target.name]: event.target.value })
        }
    
        const readValue = () => {
            console.log(inputField)
            if ( inputField.email == "admin@gmail.com" && inputField.password == "12345" ) {
                navigate("/home")
                
            } else {
                alert("Invalid credentials")
                
            }
        }
  return (
    <div>
         <div className="container mt-5">
            <div className="row">
                <div className="col col-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div className="row g-3">
                        <div className="col col-12 col-md-6 col-lg-6 col-xl-4 col-xxl-4 mx-auto">
                            <div class="card" >
                                <img src="https://png.pngtree.com/png-clipart/20191122/original/pngtree-user-icon-isolated-on-abstract-background-png-image_5192004.jpg" height="400px" class="card-img-top" alt="..."></img>
                                <div class="card-body">
                                    <label htmlFor="" className="form-label">Username</label>
                                    <input type="text" className="form-control" name="email" value={inputField.email} onChange={inputHandler} />

                                    <label htmlFor="" className="form-label">Password</label>
                                    <input type="password" className="form-control" name="password" value={inputField.password} onChange={inputHandler}></input>
                                    <button className="btn btn-success form-control mt-2" onClick={readValue}>Login</button>
                                    <Link to="/register" style={{ textDecoration: 'none' }} >
                                        <p className="text-center" > new user click here </p>
                                        
                                    </Link>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default LoginPage