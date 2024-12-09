import { useState } from "react"
import PropTypes from 'prop-types'
import Textfield from "../../elements/Textfield/Textfield"
import Button from "../../elements/Button/Button"
import IconMaildotru from "../../icons/IconMaildotru"
import IconUser from "../../icons/IconUser"

const FormProfile = ({ logout, defaultParams, params, setParams, handleUpdateProfile }) => {
  const [edit, setEdit] = useState(false);
  return(
    <form onSubmit={handleUpdateProfile}>
			<div className="mb-8">
				<Textfield
					type="email"
					placeholder="Masukkan Email Anda"
					name="email"
					icon={<IconMaildotru/>}
          label="Email"
          readOnly={true}
          className="p-2"
          value={params.email}
				/>
			</div>
			<div className="mb-8">
				<Textfield
					type="text"
					placeholder="Nama Depan"
					name="namaDepan"
					icon={<IconUser/>}
          label="Nama Depan"
          readOnly={!edit}
          className="p-2"
          value={params.first_name}
          onChange={(e) => {
            setParams({...params, first_name: e.target.value})
          }}
				/>
			</div>
			<div className="mb-8">
				<Textfield
					type="text"
					placeholder="Nama Belakang"
					name="namaBelakang"
					icon={<IconUser/>}
          label="Nama Belakang"
          readOnly={!edit}
          className="p-2"
          value={params.last_name}
          onChange={(e) => {
            setParams({...params, last_name: e.target.value})
          }}
				/>
			</div>
      {!edit && 
        <>
          <a
            className="flex cursor-pointer h-10 px-6 font-semibold border border-red-500 text-red-500 w-full text-sm my-3 justify-center items-center rounded-md"
            onClick={() => setEdit(!edit)}
          >
            Edit Profile
          </a>
          <a
            className="flex cursor-pointer justify-center items-center rounded-md h-10 px-6 font-semibold bg-red-500 text-white w-full text-sm my-3"
            onClick={logout}
          >
            Logout
          </a>   
        </>
      }
      {edit &&
      <>
        <Button
          type="submit"
          className="h-10 px-6 font-semibold bg-red-500 text-white w-full text-sm my-3"
        >
          Simpan
        </Button>
        <a
          className="flex cursor-pointer h-10 px-6 font-semibold border border-red-500 text-red-500 w-full text-sm my-3 justify-center items-center rounded-md"
          onClick={() => {setEdit(!edit), setParams(defaultParams)}}
        >
          Batalkan
        </a>
      </>
      }
		</form>
  )
}

export default FormProfile

FormProfile.propTypes = {
  value: PropTypes.string,
  logout: PropTypes.func,
  defaultParams: PropTypes.array,
  params: PropTypes.object,
  setParams: PropTypes.func,
  handleUpdateProfile: PropTypes.func
}