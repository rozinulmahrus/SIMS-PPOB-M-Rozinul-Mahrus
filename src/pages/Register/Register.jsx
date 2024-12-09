import { Link } from "react-router-dom";
import FormRegister from "../../components/forms/FormRegiter/FormRegister";
import { IMAGES } from "../../config"; 
import { RegisterAction } from "../../services/action";

const Register = () => {
  const handleRegister = (e) => {
    e.preventDefault();
    const confirmPassword = e.target.confirmPassword.value;
    const dataRegister = {
      email: e.target.email.value,
      first_name: e.target.namaDepan.value,
      last_name: e.target.namaBelakang.value,
      password: e.target.password.value
    }
    
    if(dataRegister.password !== confirmPassword){
      alert("Error : Confirm Password Tidak Sama");
    }else{
      RegisterAction(dataRegister, (response) => {
        alert("Success : " + response.message);
        console.log(response.message);
        window.location.href = "/login";
      });
      console.log(dataRegister);
    }
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
            <p>Lengkapi data untuk membuat akun</p>
          </section>
          <FormRegister
            handleRegister={handleRegister}
          />
          <section className="flex w-full justify-center text-sm mt-8 text-slate-500">
            sudah punya akun? login <Link to='/login' className="ml-1 font-bold text-red-500">disini</Link>
          </section>
        </div>
      </div>
      <div className="hidden lg:flex w-full lg:w-1/2 justify-around items-center">
        <img src={IMAGES.ILUSTRASI_LOGIN} className="w-full h-[calc(100vh-3px)]"/>
      </div>
    </div>
  )
}

export default Register;