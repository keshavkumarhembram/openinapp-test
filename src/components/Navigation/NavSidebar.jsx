import BrandLogo from "../Brand/BrandLogo";
import NavigationLinks from "./NavigationLinks";
import { useSelector, useDispatch } from "react-redux";
import { toggle } from "../../features/navSlice";

import CrossIcon from './../../assets/img/icons/Cross.svg'

function NavSidebar() {
  const navBarActive = useSelector(state => state.nav.active);
  const dispatch = useDispatch();
  const onClickHandler = () => {
    dispatch(toggle());
  }
  return (
    <div className={` fixed w-screen top-0 left-0 bg-white sm:w-56 h-[100vh] ${navBarActive? 'block': 'hidden'} sm:block`}>
       <BrandLogo />
        <NavigationLinks />
        <button onClick={onClickHandler} className={`sm:hidden absolute top-12 left-52  ${navBarActive? 'block': 'hidden'} sm:block` }>
        <img src={CrossIcon} />
        </button>
    </div>
  );
}

export default NavSidebar;
