import PropTypes from 'prop-types';
import '../../assets/css/adminlayout.css';
import SideNavbar from './SideNavbar';

const Main = ({ children }) => {
  return (
    <div className='admin_layout'>
      <aside>
        <SideNavbar />
      </aside>
      <main>
        {children}
      </main>
    </div>
  );
};
  
Main.propTypes = {
  children: PropTypes.node.isRequired
};

export default Main;
