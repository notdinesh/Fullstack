import propTypes from 'prop-types'
const Profile = (children) => {
    return (
        <div>
            <header>
                Header
            </header>
            <main>
                {children}
            </main>
            <footer>
                Footer
            </footer>
        </div>
    )
}

Profile.propType={
    children:propTypes.node.isRequired
}

export default Profile