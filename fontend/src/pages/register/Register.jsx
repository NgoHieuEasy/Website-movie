import axios from "axios";
import { useRef } from "react";
import { useState } from "react";
import { useHistory,Link } from "react-router-dom";
import "./register.scss";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const history = useHistory();

  const emailRef = useRef();
  const passwordRef = useRef();
  const usernameRef = useRef();

  const handleStart = () => {
    setEmail(emailRef.current.value);
  };
  const handleFinish = async (e) => {
    e.preventDefault();
    setPassword(passwordRef.current.value);
    setUsername(usernameRef.current.value);
    try {
      await axios.post("auth/register", { email,username, password });
      history.push("/login");
    } catch (err) {}
  };
  return (
    <div className="register">
      <div className="top">
        <div className="wrapper">
          <img
            className="logo"
            src="http://sandjamfest.com/wp-content/uploads/2020/03/White-Claw-Logo-PNG.png"
            alt=""
          />
         
            <button className="loginButton">Đăng nhập</button>
          
         
        </div>
      </div>
      <div className="container">
      <h1>Phim, chương trình truyền hình không giới hạn, v.v..</h1>
        <h2>Xem ở bất cứ đâu. Hủy bất cứ lúc nào.</h2>
        <p>
        Sẵn sàng để xem? Nhập email của bạn để tạo hoặc khởi động lại tư cách thành viên của bạn.
        </p>
        {!email ? (
          <div className="input">
            <input type="email" placeholder="email address" ref={emailRef} />
            <button className="registerButton" onClick={handleStart}>
             Bắt đầu
            </button>
          </div>
        ) : (
          <form className="input">
            <input type="username" placeholder="username" ref={usernameRef} />
            <input type="password" placeholder="password" ref={passwordRef} />
            <button className="registerButton" onClick={handleFinish}>
              Bắt đầu
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
