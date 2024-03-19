import PropTypes from "prop-types"
// import "../../assets/css/userlayout.css"
import Navbar from "./Navbar"
import Footer from "./Footer"
const Main = ({children}) => {
    return(
        <div >
                <Navbar>
                </Navbar>
            <main>
                {children}
            </main>
                <Footer>
                </Footer>
        </div>
    )
}
Main.propTypes = {
    children:PropTypes.node.isRequired
}
export default Main