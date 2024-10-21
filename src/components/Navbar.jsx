import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import useWindowSize from '../hooks/useWindowSize';
import './styles/Navbar.css';

const Navbar = () => {
    const [hovered, setHovered] = useState(null); //state for hovered nav item
    const [dropdownOpen, setDropdownOpen] = useState(false); //state for dropdown visibility
    const [isOpen, setIsOpen] = useState(false); //state for hamburger menu
    //const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

    const { width } = useWindowSize();
    const isMobile = width <= 768;

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    //useEffect(() => {
    //    const handleResize = () => {
    //        setIsMobile(window.innerWidth <= 768);
    //    };
    //    window.addEventListener('resize', handleResize);
    //    return () => {
    //        window.removeEventListener('resize', handleResize);
    //    };

    //}, []);

    const renderNavItems = () => (
        <>
            <li
                key="home"
                style={styles.navItem}
                onMouseEnter={() => setHovered(0)}
                onMouseLeave={() => setHovered(null)}
            >
                <Link
                    to="/"
                    style={{
                        ...styles.navLink,
                        backgroundColor: hovered === 0 ? 'red' : 'transparent',
                    }}


                >
                    Home
                </Link>
            </li>

            {['Get Help', 'Volunteer'].map((item, index) => (

                    <li
                        key={index + 1}
                        style={styles.navItem}
                        onMouseEnter={() => setHovered(index + 1)}
                        onMouseLeave={() => setHovered(null)}
                    >

                        <Link
                            to={`/${item.toLowerCase().replace(' ', '-')}`}
                            style={{
                                ...styles.navLink,
                                backgroundColor: hovered === index + 1 ? 'red' : 'transparent',
                            }}

                        >
                            {item}
                        </Link>
                    </li>
                ))}

            {/*Drop down for the Donate Option*/}
            <li
                style={styles.navItem}
                onMouseEnter={() => setDropdownOpen(true)} //open dropdown on hover
                onMouseLeave={() => setDropdownOpen(false)} //close dropdown on hover
            >
                <div style={styles.dropdownWrapper}>
                    <Link
                        to="/donate"
                        style={{
                            ...styles.navLink,
                            backgroundColor: dropdownOpen ? 'red' : 'transparent',
                        }}
                    >
                        Donate &#9662;
                    </Link>
                    {/*dropdown content that appears when hovered*/}
                    {dropdownOpen && (

                        <div className="dropdown-content"
                            style={{ ...styles.dropdownContent, zIndex: 10, }}
                            onMouseEnter={() => setDropdownOpen(true)}
                            onMouseLeave={() => setDropdownOpen(false)}
                        >
                            <Link to="/donate" style={styles.dropdownLink}>Money</Link>
                            <Link to="/donate" style={styles.dropdownLink}>Supplies</Link>
                        </div>

                    )}
                </div>
            </li>
        </>

    );

    return (
        <nav style={styles.navbar}>
            <h1 style={styles.title}>Disaster Relief</h1>

            {isMobile ? (
                <>
                    <div
                        style={styles.hamburger}
                        onClick={toggleMenu}
                    >

                        <div style={isOpen ? { ...styles.line, ...styles.lineOpen } : styles.line}></div>
                        <div style={isOpen ? { ...styles.line, ...styles.lineOpen } : styles.line}></div>
                        <div style={isOpen ? { ...styles.line, ...styles.lineOpen } : styles.line}></div>

                    </div>

                    {isOpen && (

                        <ul style={styles.navListOpen}>
                            {renderNavItems()}

                        </ul>
                    )}
           

                </>
            ) : (
                <ul style={styles.navList}>

                    {renderNavItems()}

                </ul>


            )}

        </nav>
    );
};


const styles = {
    navbar: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '10px 20px',
        backgroundColor: '#6D7275',
        color: 'white',
        width: '100%',
        position: 'relative',
        /*border: '1px solid red',*/
        boxSizing: 'border-box',
        boxShadow: '0 2px 5px rgba(0,0,0, 0.53)',
        /*height: '60px',*/
    },
    title: {
        margin: 0,
    },
    navList: {
        listStyle: 'none',
        display: 'flex',
        margin: '0',
        padding: '0',
        flexWrap: 'wrap',
        /* transition: 'max-height 0.3s ease',*/
    },

    navListOpen: {
        flexDirection: 'column',
        position: 'absolute',
        backgroundColor: '#6D7275',
        top: '60px',
        left: '0',
        width: '100%',
        maxHeight: '200px',
        overflow: 'visible', //changed from hidden
        listStyle: 'none',
        padding: '15px 0',

    },
    navItem: {
        /*marginLeft: '20px',*/
        position: 'relative',
        /*marginBottom: '10px',*/
        /*margin: '20px 0,'*/

    },
    dropdownWrapper: {
        position: 'relative',

    },
    navLink: {
        color: 'white',
        textDecoration: 'none',
        padding: '25px 40px',
        transition: 'background-color 0.3s',
        borderRadius: '15px',
    },
    navLinkHover: {
        backgroundColor: 'red',
        borderRadius: '15px',
    },

    dropdownContent: {
        position: 'absolute',
        padding: '10px',
        backgroundColor: 'white',
        zIndex: 10,
        minWidth: '160px',
        boxShadow: '0 2px 5px rgba(0,0,0, 0.2)',
        borderRadius: '15px',
        top: 'calc(100% + 5px)',
        left: '0',
        //opacity: 1,
        transition: 'opacity 0.3s ease',
        maxHeight: '200px',
        overflowY: 'auto',
        //visibility: 'visible',
    },

    dropdownLink: {
        display: 'block',
        padding: '12px 20px',
        color: 'black',
        textDecoration: 'none',
        transition: 'background-color 0.3s, color 0.3s',
        borderRadius: '15px',
        '&:hover': {
            backgroundColor: 'red',
        },


    },
    hamburger: {
        display: 'flex', //hidden on larger screens
        flexDirection: 'column',
        cursor: 'pointer',
        border: '2px solid red',
        position: 'relative',
        width: '30px',
        height: '30px',

    },
    line: {
        width: '30px',
        height: '3px',
        backgroundColor: 'white',
        margin: '4px 0',
        transition: 'all 0.3s ease',

    },

    lineOpen: {
        backgroundColor: 'red',
    },
    '@media (max-width: 768px)': {
        //navbar ul li: {
        //    display: 'flex',
        //    flexDirection: 'column',

        //},

        navList: {
            display: 'none',
        },
        hamburger: {
            display: 'flex',
        },
        navListOpen: {
            display: 'flex',
            flexDirection: 'column',
        },
      
    },
};

export default Navbar;