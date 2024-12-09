import PropTypes from 'prop-types';
import Button from "../../elements/Button/Button";
import Textfield from "../../elements/Textfield/Textfield";
import IconMaildottru from "../../icons/IconMaildotru";
import IconLock from "../../icons/IconLock";

const FormLogin = ({ handleLogin }) => {
	return(
		<form onSubmit={handleLogin}>
			<div className="mb-8">
				<Textfield
					type="email"
					placeholder="Masukkan Email"
					name="email"
					icon={<IconMaildottru/>}
					className="p-2"
				/>
			</div>
			<div className="mb-8">
				<Textfield
					type="password"
					placeholder="Masukkan Password"
					name="password"
					icon={<IconLock/>}
					className="p-2"
				/>
			</div>
			<Button
				type="submit"
				className="h-10 px-6 font-semibold bg-red-500 text-white w-full mt-8 text-sm"
			>
				Masuk
			</Button>
		</form>
	)
}

export default FormLogin;

FormLogin.propTypes = {
	handleLogin: PropTypes.func
}
