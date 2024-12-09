import FormProfile from "../../components/forms/FormProfile/FormProfile"
import { useEffect, useState, useRef } from "react";
import { clearToken } from "../../utils/Common";
import { getDataProfile, ProfileUpdate, UpdateImage } from "../../services/action";

const Profile = () => {
  const token = localStorage.getItem("token");
  const [dataProfile, setDataProfile] = useState([]);
  const [defaultProfile, setDefaultProfile] = useState([]);
  const inputRef = useRef(null)

  useEffect(() => {
    if(!token){
      window.location.href = "/login";
    }
  }, [])

  useEffect(() => {
    getDataProfile((response) => {
      setDataProfile(response.data)
      setDefaultProfile(response.data)
    })
  }, [])

  const handleUpdateProfile = (e) => {
    e.preventDefault();
    const data = {
      first_name: e.target.namaDepan.value,
      last_name: e.target.namaBelakang.value
    }
    ProfileUpdate(data, (response => {
      console.log(response.data)
      window.location.reload()
    }))
  }

  const handleLogout = () => {
    clearToken();
    window.location.href = "/login";
  }

  const handleImageClick = () => {
    inputRef.current.click();
  }
  
  const handleImageChange = (e) => {
    const formData = new FormData()
    formData.append('file', e.target.files[0])
    UpdateImage(formData, (response => {
      console.log(response);
      alert("Success : " + response.message)
      window.location.reload()
    }));
  }
  
  return(
    <div className="w-3/4 justify-self-center"> 
      <div className="flex flex-col w-full items-center mb-5">
        <div onClick={handleImageClick} className="cursor-pointer">
          <img src={defaultProfile.profile_image} alt="" className="w-32 h-32 mb-5"/>
          <input type="file" className="hidden" onChange={handleImageChange} ref={inputRef}/>
        </div>
        <p className="font-semibold text-xl">{defaultProfile.first_name + " " + defaultProfile.last_name}</p>
      </div>
      <div>
        <FormProfile 
          logout={handleLogout}
          params={dataProfile}
          setParams={setDataProfile}
          defaultParams={defaultProfile}
          handleUpdateProfile={handleUpdateProfile}
        />
      </div>
    </div>
  )
}

export default Profile