import React from "react";
import GenBtn from "../components/GenBtn";
import { useNavigate } from "react-router-dom";
import FirebaseApp from "../../firebaseConfig";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

export default function AdminLoginPage() {

    const navigate = useNavigate();

    function handleLogin(e) {
        e.preventDefault(); 
    
        const email = document.querySelector("#emailInput").value;
        const password = document.querySelector("#passwordInput").value;
        const auth = getAuth(FirebaseApp);
    
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                navigate("/admin"); 
                console.log("login success");
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode, errorMessage);
            });
    }
    

    return (
        <main>
            <form className="flex flex-col justify-center items-center" onSubmit={handleLogin}>
                <div className="flex flex-col">
                    <label htmlFor="email">Email</label>
                    <input className="border" placeholder="Enter email" type="email" id="emailInput" />
                </div>
                <div className="flex flex-col">
                    <label htmlFor="password">Password</label>
                    <input className="border" placeholder="Enter password" type="password" id="passwordInput" />
                </div>
                <GenBtn content="Login" btnType="primaryBtn" type="submit" />
            </form>
        </main>
    );
}
