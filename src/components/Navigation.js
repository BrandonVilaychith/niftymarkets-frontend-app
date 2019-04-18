import React, { useState } from "react";
import Logo from "../images/Logo.png";
import { Link } from "react-router-dom";

import {
	Collapse,
	Navbar,
	NavbarToggler,
	NavbarBrand,
	Nav,
	NavItem,
	NavLink,
	UncontrolledDropdown,
	DropdownToggle,
	DropdownMenu,
	DropdownItem,
} from "reactstrap";

const Navigation = () => {
	const [isOpen, setIsOpen] = useState(false);

	const toggle = () => {
		setIsOpen(!isOpen);
	};

	return (
		<div>
			<Navbar color='primary' light expand='md'>
				<NavbarBrand href='/' className='text-white'>
					<img src={Logo} alt='Logo' style={{ width: "30px" }} />
				</NavbarBrand>
				<NavbarToggler onClick={toggle} />
				<Collapse isOpen={isOpen} navbar>
					<Nav className='ml-auto text-white' navbar>
						<NavItem>
							<NavLink href='/components/'>Home</NavLink>
						</NavItem>
						<NavItem>
							<NavLink
								href='https://github.com/reactstrap/reactstrap'
								className='text-white'>
								Cart
							</NavLink>
						</NavItem>
						<UncontrolledDropdown nav inNavbar>
							<DropdownToggle nav caret className='text-white'>
								Profile
							</DropdownToggle>
							<DropdownMenu right>
								<DropdownItem>
									<Link to='/profile'>My Page</Link>
								</DropdownItem>
								{/* <DropdownItem divider /> */}
								<DropdownItem>My Items</DropdownItem>
								{/* <DropdownItem divider /> */}
								<DropdownItem>Reset</DropdownItem>
							</DropdownMenu>
						</UncontrolledDropdown>
					</Nav>
				</Collapse>
			</Navbar>
		</div>
	);
};

export default Navigation;
