import { useState } from "react";
import {
	createUserDocumentFromAuth,
	signInWithGooglePopup,
	sigInAuthUserWithEmailAndPassword,
} from "../../utils/firebase/firebase.utils";
import FormInput from "../form-input/form-input.component";
import "./sign-in-form.styles.scss";
import Button from "../button/button.component";

const defaultFormField = {
	email: "",
	password: "",
};

const SignInForm = () => {
	const [formFields, setFormFields] = useState(defaultFormField);
	const { email, password } = formFields;

	const resetFormFields = () => {
		setFormFields(defaultFormField);
	};

	const signInwithGoogle = async () => {
		const { user } = await signInWithGooglePopup();
		await createUserDocumentFromAuth(user);
	};

	const handleSubmit = async (event) => {
		event.preventDefault();

		try {
			const res = await sigInAuthUserWithEmailAndPassword(email, password);
			console.log(res);

			resetFormFields();
		} catch (error) {
			switch (error.code) {
				case "auth/wrong password":
					alert("Incorrect Password");
					break;

				case "auth/invalid-credential":
					alert("Wrong email/password entered");
					break;

				default:
					console.log("Issue creating acount: ", error.message);
			}
		}
	};

	const handleChange = (event) => {
		const { name, value } = event.target;

		setFormFields({ ...formFields, [name]: value });
	};

	return (
		<div className="sign-up-container">
			<h2>Dont Have and account?</h2>
			<span>Sign in with your email and password</span>
			<form onSubmit={handleSubmit}>
				<FormInput
					type="email"
					label="Email"
					required
					onChange={handleChange}
					name="email"
					value={email}
				/>
				<FormInput
					label="Password"
					type="password"
					required
					onChange={handleChange}
					name="password"
					value={password}
				/>

				<div className="buttons-container">
					<Button type="submit">Sign In</Button>
					<Button type="button" onClick={signInwithGoogle} buttonType="google">
						Google Sign in
					</Button>
				</div>
			</form>
		</div>
	);
};

export default SignInForm;
