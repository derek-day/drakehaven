'use  client';

import React, { useState } from 'react';
import {
  Collapse,
  Container,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from 'reactstrap';
import { useUser } from '@auth0/nextjs-auth0/client';

import PageLink from './PageLink';
import AnchorLink from './AnchorLink';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user, isLoading } = useUser();
  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className="nav-container" data-testid="navbar">
      <Navbar color="#1C1819" dark expand="md">
        <Container>
          <NavbarToggler onClick={toggle} data-testid="navbar-toggle" />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="mr-auto" navbar data-testid="navbar-items">
              <NavItem>
                <PageLink href="/" className="nav-link" testId="navbar-home">
                  {/* <img className="drakelogo" src="/logo2.png" width={80} height={80} /> */}
                  <img className="drakelogo" src="/logo6.png" width={70} height={70} style={{
                        /* box-shadow: 0px 0px 105px 45px rgba(45, 255, 196, 0.9); */
                        filter: 'drop-shadow(0px 0px 12px rgba(255, 63, 68, 0.25))'
                  }} />
                </PageLink>
              </NavItem>

              {user && (
                <>
                  <NavItem>
                    <PageLink href="/quests" className="nav-link" testId="navbar-quests">
                      Quests
                    </PageLink>
                  </NavItem>
                  <NavItem>
                    <PageLink href="/spells" className="nav-link" testId="navbar-spells">
                      Spells
                    </PageLink>
                  </NavItem>
                  <NavItem>
                    <PageLink href="/map" className="nav-link" testId="navbar-external">
                      Map
                    </PageLink>
                  </NavItem>
                </>
              )}
            </Nav>
            <Nav className="d-none d-md-block" navbar>
              {!isLoading && !user && (
                <NavItem id="qsLoginBtn">
                  <AnchorLink
                    href="/api/auth/login"
                    className="btn btn-primary btn-margin"
                    tabIndex={0}
                    testId="navbar-login-desktop">
                    Log in
                  </AnchorLink>
                </NavItem>
              )}
              {user && (

                <NavItem id="qsLogoutBtn">
                <AnchorLink
                  href="/api/auth/logout"
                  className= "btn btn-primary btn-margin mt-2"
                  icon="power-off"
                  testId="navbar-logout-mobile">
                  Log out
                </AnchorLink>
                </NavItem>


                // <UncontrolledDropdown nav inNavbar data-testid="navbar-menu-desktop">
                //   <DropdownToggle nav caret id="profileDropDown">
                //     <img
                //       src={user.picture}
                //       alt="Profile"
                //       className="nav-user-profile rounded-circle"
                //       width="50"
                //       height="50"
                //       decode="async"
                //       data-testid="navbar-picture-desktop"
                //     />
                //   </DropdownToggle>
                //   <DropdownMenu>
                //     <DropdownItem header data-testid="navbar-user-desktop">
                //       {user.name}
                //     </DropdownItem>
                //     <DropdownItem className="dropdown-profile" tag="span">
                //       <PageLink href="/profile" icon="user" testId="navbar-profile-desktop">
                //         Profile
                //       </PageLink>
                //     </DropdownItem>
                //     <DropdownItem id="qsLogoutBtn">
                //       <AnchorLink href="/api/auth/logout" icon="power-off" testId="navbar-logout-desktop">
                //         Log out
                //       </AnchorLink>
                //     </DropdownItem>
                //   </DropdownMenu>
                // </UncontrolledDropdown>
              )}
            </Nav>
            {!isLoading && !user && (
              <Nav className="d-md-none" navbar>
                <AnchorLink
                  href="/api/auth/login"
                  className="btn btn-primary btn-block"
                  tabIndex={0}
                  testId="navbar-login-mobile">
                  Log in
                </AnchorLink>
              </Nav>
            )}
            {user && (
              <Nav
                id="nav-mobile"
                className="d-md-none justify-content-between"
                navbar
                data-testid="navbar-menu-mobile">
                <NavItem id="qsLogoutBtn">
                  <AnchorLink
                    href="/api/auth/logout"
                    className= "btn btn-primary btn-margin mt-2"
                    icon="power-off"
                    testId="navbar-logout-mobile">
                    Log out
                  </AnchorLink>
                </NavItem>

                {/* <NavItem>
                  <span className="user-info">
                    <img
                      src={user.picture}
                      alt="Profile"
                      className="nav-user-profile d-inline-block rounded-circle mr-3"
                      width="50"
                      height="50"
                      decode="async"
                      data-testid="navbar-picture-mobile"
                    />
                    <h6 className="d-inline-block" data-testid="navbar-user-mobile">
                      {user.name}
                    </h6>
                  </span>
                </NavItem>
                <NavItem>
                  <PageLink href="/profile" icon="user" testId="navbar-profile-mobile">
                    Profile
                  </PageLink>
                </NavItem>
                <NavItem id="qsLogoutBtn">
                  <AnchorLink
                    href="/api/auth/logout"
                    className="btn btn-link p-0"
                    icon="power-off"
                    testId="navbar-logout-mobile">
                    LOGOUT
                  </AnchorLink>
                </NavItem> */}

              </Nav>
            )}
          </Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavBar;
