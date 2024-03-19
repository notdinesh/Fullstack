import { Menu, MenuItem, Sidebar, SubMenu} from "react-pro-sidebar"
import { Link, useNavigate } from "react-router-dom"
import DiamondIcon from '@mui/icons-material/Diamond';
import PersonIcon from '@mui/icons-material/Person';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';
import Popup from './Popup'
import { useState } from "react";

const SideNavbar = () => {

    const [openLogoutPopup, setOpenLogoutPopup] = useState(false)
    const navigate = useNavigate();

    const handleLogout =() =>{
        setOpenLogoutPopup(true);
    }

    const handleLogoutConfirmation = () =>{
        setOpenLogoutPopup(false);
        navigate("/cg/login");
    }

  return (
    <>
    <Sidebar rootStyles={{
        "& .ps-sidebar-container":{
            backgroundColor: '#000 !important'
        },
        "& .ps-menuitem-root":{
            color: 'white !important'
        },
        "& .ps-menuitem-root:hover":{
            backgroundColor: '#e50914 !important'
        },
        "& .ps-menu-button":{
            "&:hover":{
                backgroundColor: '#e50914 !important'
            }
        }
    }}>
      <Menu>
        <MenuItem icon={<DiamondIcon/>} component={<Link to="/cg/admin/dashboard"/>}> Dashboard </MenuItem>
        <MenuItem icon={<PersonIcon/>} component={<Link to="/cg/admin/user-info"/>}> User Information </MenuItem>
        <MenuItem icon={<SettingsIcon/>}component={<Link to="/cg/admin/settings"/>}> Settings </MenuItem>
        <MenuItem icon={<LogoutIcon/>} onClick={handleLogout}> Logout </MenuItem>
      </Menu>
    </Sidebar>

    {/* <Popup
        title="Are you sure you want to logout?"
        disagree="Cancel"
        open={openLogoutPopup}
        onClose={() => setOpenLogoutPopup(false)}
        onAgree={handleLogoutConfirmation}/> */}
    </>        
  )
}

export default SideNavbar
