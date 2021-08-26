import { Fragment } from 'react'
import { Disclosure } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'
import { NavLink } from 'react-router-dom'


export default function NavList() {
  return (
    <Disclosure as="nav" className="bg-gray-800">
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
            <div className="relative flex items-center justify-between h-16">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Ouvrir le menu</span>
                  {open ? (
                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex-shrink-0 flex items-center">
                  {/* <img
                    className="block lg:hidden h-8 w-auto"
                    src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg"
                    alt="T"
                  /> */}
                    <h1 className="block text-white">To Do Manager</h1>
                </div>
                <div className="hidden sm:block sm:ml-6">
                  <div className="flex space-x-4">
                    <NavLink className="text-gray-300 hover:bg-gray-700 hover:text-white 
                    px-3 py-2 rounded-md text-sm font-medium" to="/home">
                      Accueil
                    </NavLink>
                    <NavLink className="text-gray-300 hover:bg-gray-700 hover:text-white 
                    px-3 py-2 rounded-md text-sm font-medium bg-gray-900 text-white" to="/list">
                      Liste des Tâches
                    </NavLink>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </>
      )}
    </Disclosure>
  )
}
