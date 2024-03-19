import propTypes from "prop-types"
import Header from "./Header";
import Footer from "./Footer";
import "../../assets/css/Home.css"

const Home = ({children}) => {
    return(
        <div className="user_layout">
            <header>
                <Header>

                </Header>
            </header>
            <main>
                {children}
            </main>
            <footer>
                <Footer>
                </Footer>
            </footer>
        </div>
    )
}
Home.propTypes = {
    children:propTypes.node.isRequired
}
export default Home