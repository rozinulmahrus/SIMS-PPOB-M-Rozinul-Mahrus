import { Link } from "react-router-dom";
import FormLogin from "../../components/forms/FormLogin/FormLogin";
import { IMAGES } from "../../config"; 
import { LoginAction } from "../../services/action";

const Login = () => {
    const handleLogin = (e) => {
    e.preventDefault()

    const dataUser = {
      email: e.target.email.value,
      password: e.target.password.value
    }
    LoginAction(dataUser, (response) => {
      console.log(response.data.token);
      localStorage.setItem("token", response.data.token);
      window.location.href ="/";
    });
    // console.log(dataUser);

  }

  return(
    <div className="w-full h-[calc(100vh-3px)] flex items-center">
      <div className="flex w-full lg:w-1/2 justify-center">
        <div className="w-full h-full px-8 md:px-32 lg:px-24 font-sans">
          <section className="flex w-full justify-center font-semibold text-2xl mb-5 gap-2">
            <img src={IMAGES.LOGO}/>
            <p>SIMS PPOB</p>
          </section>
          <section className="flex w-full justify-center font-semibold text-2xl mb-20">
            <p>Masuk atau buat akun untuk memulai</p>
          </section>
          <FormLogin
            handleLogin={handleLogin}
          />
          <section className="flex w-full justify-center text-sm mt-8 text-slate-500">
            belum punya akun? registrasi <Link to="/register" className="ml-1 font-bold text-red-500">disini</Link>
          </section>
        </div>
      </div>
      <div className="hidden lg:flex w-full lg:w-1/2 justify-around items-center">
        <img src={IMAGES.ILUSTRASI_LOGIN} className="w-full h-[calc(100vh-3px)]"/>
      </div>
    </div>
  )
}

export default Login;