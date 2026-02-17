import React, { useState } from "react";
import { useNavigate} from "react-router-dom";

function Auth() {
    const [isLogin, setIsLogin] = useState(false)

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const regex = /^[a-zA-z0-9._+#%-]+@google\.com$/ 
    // \. bcoz . is special character, $ is end of the string. regex enclosed in / /

    const navigate = useNavigate();

    const handleFormSubmission = (e) => {
        e.preventDefault()

        if(!regex.test(email)) {
            alert("Invalid email domain!")
        } else {
            // console.log('Signup: ', {name, email, password})
            console.log('Dashboard')
            navigate('/dashboard')
        }
    }

    const toggleMode = () => {
        setIsLogin(!isLogin);
    }

    return (
        <div>
            <h1>{isLogin ? 'Login' : 'Signup'}</h1>

            <form onSubmit={handleFormSubmission}>
                {!isLogin && (
                    <div>
                        <label>Name:</label>
                        <input type="text" value={name} onChange={(e) => setName(e.target.value)}
                        required />
                    </div>
                )}
                <div>
                    <label>Email:</label>
                        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)}
                        required />
                </div>
                <div>
                    <label>Password:</label>
                        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)}
                        required />
                </div>
                <button type="submit">{isLogin ? 'Login' : 'Signup'}</button>
            </form>
            <p>
                {isLogin ? "Don't have an account?" : "Already have an account?"}
                <button onClick={toggleMode}>{isLogin ? 'Signup' : 'Login'}</button>
            </p>
        </div>
    )
}

export default Auth