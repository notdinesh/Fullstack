import propTypes from 'prop-types'
import AdminSidebar from './AdminSidebar'

const Main = ({children}) => {
    return (
        <div>
            <asider>
                <AdminSidebar>

                </AdminSidebar>
            </asider>
            <main>
                {children}
            </main>
        </div>
    )
}

Main.propType={
    children:propTypes.node.isRequired
}

export default Main