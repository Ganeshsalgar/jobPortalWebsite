import React from 'react'

const Footer = () => {
  return (
    <div>
        <footer class="bg-gray-900 text-white py-10">
  <div class="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
    
    <div>
      <h1 class="text-2xl font-bold text-indigo-500">YourBrand</h1>
      <p class="mt-4 text-gray-400">
        Delivering excellence in every project. Building a better tomorrow, one step at a time.
      </p>
    </div>

    
    <div>
      <h2 class="text-xl font-semibold text-indigo-400">Quick Links</h2>
      <ul class="mt-4 space-y-2 text-gray-300">
        <li><a href="#" class="hover:text-indigo-400">About Us</a></li>
        <li><a href="#" class="hover:text-indigo-400">Services</a></li>
        <li><a href="#" class="hover:text-indigo-400">Contact</a></li>
        <li><a href="#" class="hover:text-indigo-400">Careers</a></li>
      </ul>
    </div>

    
    <div>
      <h2 class="text-xl font-semibold text-indigo-400">Follow Us</h2>
      <div class="flex space-x-4 mt-4">
        <a href="#" class="text-gray-400 hover:text-indigo-400">
          <svg class="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
            <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .732.593 1.325 1.325 1.325h11.486v-9.294h-3.125v-3.622h3.125v-2.671c0-3.1 1.893-4.789 4.656-4.789 1.325 0 2.464.099 2.795.143v3.24h-1.918c-1.504 0-1.794.715-1.794 1.76v2.317h3.587l-.467 3.622h-3.12v9.294h6.116c.732 0 1.325-.593 1.325-1.325v-21.35c0-.733-.593-1.325-1.325-1.325z"/>
          </svg>
        </a>
        <a href="#" class="text-gray-400 hover:text-indigo-400">
          <svg class="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
            <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.611 1.799-1.574 2.165-2.723-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.554-3.594-1.554-2.722 0-4.928 2.206-4.928 4.927 0 .386.043.763.127 1.124-4.096-.205-7.728-2.169-10.165-5.155-.424.728-.666 1.575-.666 2.476 0 1.708.869 3.215 2.188 4.098-.807-.026-1.567-.247-2.228-.617v.062c0 2.385 1.698 4.374 3.95 4.828-.413.112-.849.171-1.296.171-.317 0-.626-.03-.927-.088.627 1.955 2.445 3.379 4.6 3.42-1.68 1.319-3.808 2.105-6.115 2.105-.397 0-.789-.023-1.175-.069 2.179 1.396 4.768 2.212 7.557 2.212 9.054 0 14.01-7.496 14.01-13.986 0-.213-.004-.425-.014-.637.962-.695 1.797-1.562 2.457-2.549z"/>
          </svg>
        </a>
        <a href="#" class="text-gray-400 hover:text-indigo-400">
          <svg class="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
            <path d="M19.615 3h-15.229c-1.35 0-2.386 1.035-2.386 2.386v13.229c0 1.35 1.035 2.386 2.386 2.386h15.229c1.35 0 2.385-1.035 2.385-2.386v-13.229c0-1.35-1.035-2.386-2.385-2.386zm-8.615 16.615c-4.229 0-7.654-3.425-7.654-7.615s3.425-7.615 7.654-7.615 7.654 3.425 7.654 7.615-3.425 7.615-7.654 7.615zm0-13.846c-3.437 0-6.231 2.794-6.231 6.231s2.794 6.231 6.231 6.231 6.231-2.794 6.231-6.231-2.794-6.231-6.231-6.231zm7.154-.769c0 .712-.577 1.308-1.308 1.308s-1.308-.577-1.308-1.308c0-.712.577-1.308 1.308-1.308s1.308.577 1.308 1.308z"/>
          </svg>
        </a>
      </div>
    </div>
  </div>
  <div class="mt-10 text-center text-gray-600">
    <p>&copy; 2024 YourBrand. All Rights Reserved.</p>
  </div>
</footer>

    </div>
  )
}

export default Footer