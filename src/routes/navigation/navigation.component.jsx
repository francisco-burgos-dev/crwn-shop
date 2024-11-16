import { Link, Outlet } from "react-router-dom";
import { ReactComponent as CrwLogo } from "../../assests/crown.svg";
import "./navigation.styles.scss";

const Navigation = () => {
	return (
		<>
			<div className="navigation">
				<Link className="nav-link">
					<CrwLogo className="logo-container" to="/">
						Logo
					</CrwLogo>
				</Link>
				<div className="nav-links-container">
					<Link className="nav-link" to="/shop">
						SHOP
					</Link>

					<Link className="nav-link" to="/sign-in">
						SIGN IN
					</Link>
				</div>
			</div>
			<Outlet />
		</>
	);
};

export default Navigation;
