import Wrapper from "../components/Wrapper";
import { Link } from "react-router-dom";
import style from "../Styles/NotFound.module.css";

const NotFound = () => {
    return (
        <Wrapper>
            <h1>404</h1>
            <p style={{ textAlign: "center" }}>Sorry, the page you are looking for is not found.</p>
            <Link to="/" className={style["homeLink"]}>Go back to Home</Link>
        </Wrapper>
    );
};
export default NotFound;