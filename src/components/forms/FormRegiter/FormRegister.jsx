import PropTypes from 'prop-types';
import Button from "../../elements/Button/Button";
import Textfield from "../../elements/Textfield/Textfield";
import IconMaildottru from "../../icons/IconMaildotru"
import IconLock from "../../icons/IconLock";
import IconUser from "../../icons/IconUser";

const FormRegister = ({ handleRegister }) => {
	return(
		<form onSubmit={handleRegister}>
			<div className="mb-8">
				<Textfield
					type="email"
					placeholder="Masukkan Email Anda"
					name="email"
					icon={<IconMaildottru/>}
          className="p-2"
          required={true}
        />
			</div>
			<div className="mb-8">
				<Textfield
					type="text"
					placeholder="Nama Depan"
					name="namaDepan"
					icon={<IconUser/>}
          className="p-2"
          required={true}
        />
			</div>
			<div className="mb-8">
				<Textfield
					type="text"
					placeholder="Nama Belakang"
					name="namaBelakang"
					icon={<IconUser/>}
          className="p-2"
          required={true}
        />
			</div>
			<div className="mb-8">
				<Textfield
					type="password"
					placeholder="Buat Password"
					name="password"
					icon={<IconLock/>}
          className="p-2"
          required={true}

        />
			</div>
			<div className="mb-8">
				<Textfield
					type="password"
					placeholder="Konfirmasi Password"
					name="confirmPassword"
					icon={<IconLock/>}
          className="p-2"
          required={true}
        />
			</div>
			<Button
				type="submit"
				className="h-10 px-6 font-semibold bg-red-500 text-white w-full mt-8 text-sm"
			>
				Registrasi
			</Button>
		</form>
	)
}

export default FormRegister;

FormRegister.propTypes = {
  handleRegister: PropTypes.func 
}
