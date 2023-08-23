'use client';
import { Navbar, NavbarContent, NavbarItem, Link } from '@nextui-org/react';

export default function App() {
  return (
    <Navbar
      className="bg-black w-full flex justify-between"
      isBlurred
      maxWidth="full"
    >
      <NavbarContent className="w-full gap-4 p-4">
        <NavbarItem>
          <Link className="hover:text-yellow-500" color="foreground" href="#">
            Projects
          </Link>
        </NavbarItem>
        <NavbarItem className="hover:text-yellow-500">
          <Link className="hover:text-yellow-500" color="foreground" href="#">
            About
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent className="w-full p-4" justify="end">
        <NavbarItem className="hover:text-yellow-500">
          <Link className="hover:text-yellow-500" color="foreground" href="#">
            Contact
          </Link>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
