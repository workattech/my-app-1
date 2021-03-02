import { Link } from "react-router-dom";

function NavBar(props) {
    return (
        <nav>
            <span style={{paddingRight: "10px"}}>
                <Link to="/">URL Encoder</Link>
            </span>

            <span style={{paddingRight: "10px"}}>
                <Link to="/base64-encoder">Base64 Encoder</Link>
            </span>
            
            <span style={{paddingRight: "10px"}}>
                <Link to="/md5-encoder">MD5 Encoder</Link>
            </span>
        </nav>
    )
}

export default NavBar;