import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import MenuIcon from '@mui/icons-material/Menu';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

import logo from '../../assets/image/logo_blur.png';

function Sidebar(props) {
    const [isDropdownOpen, setDropdownOpen] = useState(false);
    const {isOpen} = props;

    const toggleDropdown = () => setDropdownOpen(!isDropdownOpen);

    // Xử lý khi click ra ngoài để đóng dropdown
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (!event.target.closest('.dropdown-button')) {
                setDropdownOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);
    return (
        <>

        </>
    );
};

export default Sidebar;
