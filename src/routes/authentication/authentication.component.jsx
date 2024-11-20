import SignInForm from "../../components/sign-in-form/sign-in-form.component";
import SignUp from "../../components/sign-up-form/sign-up-form.component";
// import {
// 	signInWithGooglePopup,
// 	createUserDocumentFromAuth,
// } from "../../utils/firebase/firebase.utils";

import "./authentication.styles.scss";

const Authentication = () => {
	// const logGoogleUser = async () => {
	// 	const { user } = await signInWithGooglePopup();
	// 	await createUserDocumentFromAuth(user);
	// };

	return (
		<div className="authentication-container">
			<SignInForm />
			<SignUp />
		</div>
	);
};

export default Authentication;
