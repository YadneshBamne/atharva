import React from 'react'

const Footer = () => {
  return (
    <div>
      <footer class="bg-white max-w-screen shadow dark:bg-gray-900">
        <div class="w-full mx-auto p-4 md:flex md:items-center md:justify-between">
          <span class="text-sm text-white sm:text-center dark:text-white">
            ©
            <a href="https://flowbite.com/" class="hover:underline">
              HOLMES
            </a>
            . All Rights Reserved.
          </span>
          <ul class="flex flex-wrap items-center mt-3 text-sm font-medium text-white dark:white sm:mt-0">
            <li>
              <a href="#" class="hover:underline me-4 md:me-6">
                Home
              </a>
            </li>
            <li>
              <a href="#" class="hover:underline me-4 md:me-6">
                About Us
              </a>
            </li>
            <li>
              <a href="#" class="hover:underline me-4 md:me-6">
                Contact Us
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  )
}

export default Footer