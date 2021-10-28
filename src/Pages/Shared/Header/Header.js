import React from 'react';
import { Fragment } from 'react'
import { Disclosure, Menu } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'
import logo from '../../../images/logo.png'
import { Link, NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import { HashLink } from 'react-router-hash-link';
import avatar from '../../../images/avatar.jpg'

const navigation = [
    { name: 'Home', to: '/home', current: true },
    { name: 'About', to: '/about', current: false },
    { name: 'COVID Update', to: '/covid-update', current: false }
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}
const Header = () => {
    const { user, logOut } = useAuth();

    return (
        <Disclosure as="nav" className="bg-gray-100">
            {({ open }) => (
                <>
                    <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
                        <div className="relative flex items-center justify-between h-24">
                            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                                {/* Mobile menu button*/}
                                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md  hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                                    <span className="sr-only">Open main menu</span>
                                    {open ? (
                                        <XIcon className="block h-6 w-6" aria-hidden="true" />
                                    ) : (
                                        <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                                    )}
                                </Disclosure.Button>
                            </div>
                            <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                                <div className="flex-shrink-0 flex items-center">
                                    <img
                                        className="block lg:hidden h-10 w-auto"
                                        src={logo}
                                        alt="Workflow"
                                    />
                                    <img
                                        className="hidden lg:block h-16 w-auto"
                                        src={logo}
                                        alt="Workflow"
                                    />
                                </div>
                            </div>

                            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                                <div className="hidden sm:block sm:ml-6">
                                    <div className="flex space-x-2">
                                        <NavLink to="/home" className="text-base text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md">Home</NavLink>

                                        <HashLink to="/home/#services" className="text-base text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md">Services</HashLink>

                                        <NavLink to="/about" className="text-base text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md">About Us</NavLink>

                                        <NavLink to="/covid-update" className="text-base text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md">COVID Update</NavLink>

                                        {
                                            user.email && <span className="text-base text-green-600 pr-2 py-2"> Hey, {user.displayName}</span>
                                        }
                                        {
                                            user.email ?
                                                <button type="button" onClick={logOut} className="text-base text-gray-300 bg-gray-700 hover:bg-black hover:text-white px-3 py-2 rounded-md" >
                                                    Log Out
                                                </button>
                                                : <Link to="/login">
                                                    <button type="button" className=" ml-2 text-base text-gray-300 hover:bg-gray-700 bg-black hover:text-white px-3 py-2 rounded-md" >
                                                        Log In
                                                    </button>
                                                </Link>
                                        }
                                    </div>
                                </div>

                                {/* Profile  */}
                                {user.email &&
                                    <Menu as="div" className="ml-3 relative">
                                        <div>
                                            <Menu.Button className="bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                                                <span className="sr-only">Open user menu</span>
                                                <img
                                                    className="h-12 w-12 rounded-full"
                                                    src={user.photoURL ? user.photoURL : avatar}
                                                    alt=""
                                                />
                                            </Menu.Button>
                                        </div>
                                    </Menu>
                                }
                            </div>
                        </div>
                    </div>

                    <Disclosure.Panel className="sm:hidden">
                        <div className="px-2 pt-2 pb-3 space-y-1">
                            {navigation.map((item) => (
                                <NavLink
                                    key={item.name}
                                    to={item.to}
                                    className={classNames(
                                        item.current ? 'bg-gray-800 text-white' : 'text-gray-300 hover:bg-gray-600 hover:text-white',
                                        'block px-3 py-2 rounded-md text-base font-medium'
                                    )}
                                    aria-current={item.current ? 'page' : undefined}
                                >
                                    {item.name}
                                </NavLink>
                            ))}
                            {
                                user.email ?
                                    <button type="button" onClick={logOut} className="text-gray-300 w-full text-left bg-gray-900 hover:text-white block px-3 py-2 rounded-md text-base font-medium" >
                                        Log Out
                                    </button>
                                    : <Link to="/login">
                                        <button type="button" className="text-gray-300 w-full text-left bg-gray-900 hover:text-white block px-3 py-2 rounded-md text-base font-medium" >
                                            Log In
                                        </button>
                                    </Link>
                            }
                        </div>
                    </Disclosure.Panel>
                </>
            )}
        </Disclosure>
    );
};

export default Header;