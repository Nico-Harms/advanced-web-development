import React from "react";
import { useNavigate } from "react-router-dom";
import FirebaseApp from "../../../firebaseConfig";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import logo from "../../assets/images/JumboLogo.svg";
import GenBtn from "../../components/interactions/GenBtn";

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
        <main className="flex flex-col items-center gap-10 py-20">
            <div className="flex flex-col items-center gap-10">
                <img className="w-60" src={logo} alt="Jumbo Bakery Logo" />
                <p className="font-mont text-sm text-off-black w-[175px]">Login to administrate courses and participants</p>
            </div>
            <form className="flex flex-col justify-center items-center gap-5" onSubmit={handleLogin}>
                <div className="flex flex-col gap-1">
                    <label className="font-bebas text-off-black" htmlFor="email">Email</label>
                    <input className="border-[1px] border-off-black py-1 px-1" placeholder="Enter email" type="email" id="emailInput" />
                </div>
                <div className="flex flex-col gap-1">
                    <label className="font-bebas text-off-black" htmlFor="password">Password</label>
                    <input className="border-[1px] border-off-black py-1 px-1" placeholder="Enter password" type="password" id="passwordInput" />
                </div>
                <GenBtn content="Login" btnType="secondaryBtn" type="sumbit"/>
            </form>
        </main>
    );
}
