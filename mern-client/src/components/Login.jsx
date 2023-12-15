import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { MdOutlineSkipPrevious } from "react-icons/md";
import { AuthContext } from "../contexts/AuthProvider.jsx";
import { FcGoogle } from "react-icons/fc";

const Login = () => {
  const { loginWithGoogle, login } = useContext(AuthContext);
  const [error, setError] = useState("error");

  const location = useLocation();
  const navigate = useNavigate();

  const from = location.state?.from?.pathname || "/";

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    login(email, password)
    .then((userCredential) => {
      // Signed up
      const user = userCredential.user;
      document.getElementById("text-success").innerHTML =
        "Đăng nhập thành công";
      navigate(from, { replace: true });
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      setError("Thất bại do: ", errorMessage);
      document.getElementById("text-message").innerHTML = errorMessage + errorCode;
    });
  };

  //login google
  const handleGoogle = () => {
    loginWithGoogle()
      .then((result) => {
        const user = result.user;
        document.getElementById("text-success").innerHTML =
          "Đăng ký thành công";
        navigate(from, { replace: true });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setError("Thất bại do: ", errorMessage);
        document.getElementById("text-message").innerHTML =
          errorMessage + errorCode;
      });
  };

  return (
    <section className="flex flex-col md:flex-row h-screen items-center">
      <div className="bg-teal-100 hidden lg:block w-full md:w-1/2 xl:w-2/3 h-screen">
        <img
          src="https://afamilycdn.com/150157425591193600/2022/6/1/still4-1654071018154-1654071019484239449724.jpg"
          alt=""
          className="w-full h-full object-cover"
        />
      </div>

      <div
        className="bg-white w-full md:max-w-md lg:max-w-full md:mx-auto md:mx-0 md:w-1/2 xl:w-1/3 h-screen px-6 lg:px-16 xl:px-12
flex items-center justify-center"
      >
        <div className="w-full h-100">
          <Link to="/admin/dashboard" className="flex items-center gap-2">
            <MdOutlineSkipPrevious className="mt-4 text-[1.4rem]" />
            <p className="mt-4">quay lại</p>
          </Link>
          <h1 className="text-xl md:text-2xl font-bold leading-tight mt-7">
            Đăng nhập
          </h1>

          <form
            onSubmit={handleLogin}
            className="mt-6"
            action="#"
            method="POST"
          >
            <div>
              <label className="block text-gray-700">Email</label>
              <input
                type="email"
                name="email"
                id=""
                placeholder="ví dụ: hello@gmail.com"
                className="w-full px-4 py-2 rounded-lg bg-gray-100 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none"
                autoFocus
                autoComplete
                required
              />
            </div>

            <div className="mt-4">
              <label className="block text-gray-700">Mật khẩu</label>
              <input
                type="password"
                name="password"
                id=""
                placeholder="ví dụ: mật khẩu"
                minLength="6"
                className="w-full px-4 py-2 rounded-lg bg-gray-100 mt-2 border focus:border-blue-500
        focus:bg-white focus:outline-none"
                required
              />
            </div>

            <p id="text-message" className="text-center text-red-500"></p>
            <p id="text-success" className="text-center text-green-500"></p>

            <div className="text-right mt-2">
              <a
                href="#"
                className="text-sm font-semibold text-gray-700 hover:text-blue-700 focus:text-blue-700"
              >
                Quên mật khẩu?
              </a>
            </div>

            <button
              type="submit"
              className="w-full block bg-teal-400 hover:bg-indigo-400 focus:bg-indigo-400 text-white font-semibold rounded-lg
      px-4 py-2 mt-6"
            >
              Đăng nhập
            </button>
          </form>

          <hr className="my-6 border-gray-300 w-full" />

          <button
            onClick={handleGoogle}
            type="button"
            className="w-full block bg-white hover:bg-gray-100 focus:bg-gray-100 text-gray-900 font-semibold rounded-lg px-4 py-2 border border-gray-300"
          >
            <div className="flex items-center justify-center">
              <FcGoogle />
              <span className="ml-4 font-light">Đăng kí với Google</span>
            </div>
          </button>

          <p className="mt-8">
            Nếu chưa có tài khoản?{" "}
            <Link
              to="/signup"
              className="text-teal-400 hover:text-blue-700 font-semibold"
            >
              Đăng kí ngay
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Login;
