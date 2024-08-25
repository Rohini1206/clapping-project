import React from 'react';
import { Logo, NavbarContainer } from './Navbar.styles';

const Navbar: React.FC = () => {
    return (
        <NavbarContainer>
            <Logo src="/assets/images/clapping-logo.png" alt="Clapping.me Logo" />
        </NavbarContainer>
    );
};

export default Navbar;
