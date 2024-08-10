import React from "react";

const PropertyForm: React.FC = () => {
  return (
    <div className="bg-gray-200 min-h-screen">
      {/* Header */}
      <header className="bg-gray-100">
        {/* Navbar */}
        <div className="navbar bg-gray-200 text-gray-700">
  {/* Left Nav Button */}
  <div className="navbar-start flex items-center">
    <a className="btn btn-ghost text-xl text-black">0xList</a>
  </div>
  
  {/* Center Nav Buttons */}
  <div className="navbar-center hidden md:flex">
    <ul className="menu menu-horizontal px-1">
      <li><a>For Sale</a></li>
      <li><a>Property</a></li>
      <li><a>Cars & Vehicles</a></li>
      <li><a>Jobs</a></li>
      <li><a>Pets</a></li>
      <li><a>Community</a></li>
      <li><a className="bg-red-500 text-white px-3 py-2 rounded">List New</a></li>
    </ul>
  </div>
  
  {/* Right Nav Buttons */}
  <div className="navbar-end flex items-center space-x-2">
  <a className="btn md:hidden flex items-center justify-center p-2">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 5.25h16.5m-16.5 6.75h16.5m-16.5 6.75h16.5" />
    </svg>
  </a>
  <a className="btn hidden md:flex items-center justify-center p-2">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418" />
    </svg>
  </a>
  <a className="btn hidden md:flex items-center justify-center p-2">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
      <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a2.25 2.25 0 0 0-2.25-2.25H15a3 3 0 1 1-6 0H5.25A2.25 2.25 0 0 0 3 12m18 0v6a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 18v-6m18 0V9M3 12V9m18 0a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 9m18 0V6a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 6v3" />
    </svg>
  </a>
  <a className="btn hidden md:flex items-center justify-center p-2">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
      <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
    </svg>
  </a>
</div>
</div>
        <div className="flex flex-col items-start space-y-1 px-4 bg-gray-200">
          <span className="text-xs text-gray-500">Beta v0.01</span>
          <div className="text-sm font-semibold text-gray-900">List, sell, and buy anything</div>
          <div className="flex flex-wrap">
            <span className="text-sm font-medium text-blue-500 mr-1">onchain,</span>
            <span className="text-sm font-medium text-red-500">superfast</span>
          </div>
        </div>
      </header>
      {/* Main */}
      <main>
      <div className="hero min-h-screen bg-gray-300 text-gray-700">
      <div className="hero-content grid grid-cols-1 lg:grid-cols-2 gap-8 p-8 lg:p-16">
        <div className="flex flex-col justify-center items-start space-y-4">
          <h1 className="text-blue-600 font-extrabold text-5xl lg:text-6xl leading-tight">
            GM GM ...!!!
          </h1>
          <p className="text-blue-700 font-bold text-7xl lg:text-8xl leading-tight">
            DEAL
          </p>
          <p className="text-blue-700 font-bold text-5xl lg:text-6xl leading-tight">
            OF THE DAY
          </p>
          <div className="flex items-center text-gray-800 text-lg space-x-2">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-yellow-500">
              <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
            </svg>
            <span className="font-semibold">5.0</span>
          </div>
          <p className="text-gray-700 text-md">
            San Francisco, US
          </p>
          <p className="text-gray-700 text-md">
            Stay with Brian, Coinbase
          </p>
          <p className="text-gray-700 text-md">
            Aug 20 - 24
          </p>
          <p className="text-gray-700 text-md">
            $100 night
          </p>
          <button className="bg-red-500 text-white py-3 px-6 rounded-lg font-semibold hover:bg-red-600 transition duration-300 ease-in-out">
            Book Now
          </button>
        </div>
        <div className="flex flex-col items-center lg:items-end text-center lg:text-left">
          <div className="text-center lg:text-left mb-4">
            <b><span style={{ color: 'red' }}>NEW</span> <span style={{ color: 'blue' }}>ETHSingapore 2024 Listings!</span></b>
          </div>
          <img
            src="https://sthotelsmalta.com/wp-content/uploads/2022/06/modern-luxury-bedroom-suite-and-bathroom-with-working-table-scaled.jpg"
            alt="Modern Luxury Bedroom"
            className="max-w-full rounded-lg shadow-2xl"
          />
          <p className="text-lg font-bold mt-4 text-gray-800">Brian Armstrong</p>
        </div>
      </div>
    </div>
        <div className="flex w-full flex-col">
          <div className="bg-white text-gray-700 grid h-20 place-items-center">
            <div className="flex w-full justify-around">
              <div className="flex items-center text-s">
                <span className="text-blue-500 text-l font-bold">STEP 1: </span>
                <span className="text-white-500 text-l"> List/Sell/Buy</span>
              </div>
              <div className="flex items-center">
                <span className="text-blue-500 text-l font-bold">STEP 2: </span>
                <span className="text-white-500 text-l"> Connect Wallet</span>
              </div>
              <div className="flex items-center">
                <span className="text-blue-500 text-l font-bold">STEP 3: </span>
                <span className="text-white-500 text-l"> Pay</span>
              </div>
              <span className="text-red-500 text-l font-bold">Simple!</span>
            </div>
          </div>
          <div className="divider">
          </div>
          <div className="bg-blue-500 text-color-white grid h-20 place-items-center text-xl">
            <p>
              More Transactions = FREE NFTs = More Savings = More Earnings = More FUN!
            </p>
          </div>
        </div>
        <div className="p-4"> {/* Add padding to the parent container */}
  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
    {/* Item 1 */}
    <div className="bg-gray rounded-lg overflow-hidden shadow-md mx-2"> {/* Add margin to each item */}
      <p className="text-sm text-red-500 font-bold leading-tight text-right pr-4">Sponsored</p>
      <img src="https://www.gannett-cdn.com/-mm-/05b227ad5b8ad4e9dcb53af4f31d7fbdb7fa901b/c=0-64-2119-1259/local/-/media/USATODAY/USATODAY/2014/08/13/1407953244000-177513283.jpg?width=2560" alt="Image 1" className="w-full h-48 object-cover" />
      <div className="p-4">
        <div className="flex justify-between items-center">
          <p className="text-sm text-gray-600 mb-4 font-bold">New York, US</p>
          <div className="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-gray-800">
              <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
            </svg>
            <span className="ml-2 text-sm text-gray-800">5.0</span>
          </div>
        </div>
        <div className="space-y-1">
          <p className="text-sm text-gray-800 leading-tight">Stay with Gary, SEC</p>
          <p className="text-sm text-gray-800 leading-tight">Aug 14 - 18</p>
          <p className="text-sm text-red-500 font-bold leading-tight">$500 night</p>
        </div>
      </div>
    </div>
        {/* Item 2 */}
        <div className="bg-gray rounded-lg overflow-hidden shadow-md mx-2"> {/* Add margin to each item */}
      <p className="text-sm text-red-500 font-bold leading-tight text-right pr-4">Highlighted</p>
      <img src="      https://images.pexels.com/photos/8135103/pexels-photo-8135103.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Image 1" className="w-full h-48 object-cover" />
      <div className="p-4">
        <div className="flex justify-between items-center">
          <p className="text-sm text-gray-600 mb-4 font-bold">Istanbul, Turkey</p>
          <div className="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-gray-800">
              <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
            </svg>
            <span className="ml-2 text-sm text-gray-800">4.0</span>
          </div>
        </div>
        <div className="space-y-1">
          <p className="text-sm text-gray-800 leading-tight">Stay with Ali, Hustler</p>
          <p className="text-sm text-gray-800 leading-tight">Oct 02 - 04</p>
          <p className="text-sm text-red-500 font-bold leading-tight">$130 night</p>
        </div>
      </div>
    </div>
    {/* Item 3 */}
    <div className="bg-gray rounded-lg overflow-hidden shadow-md mx-2"> {/* Add margin to each item */}
      <p className="text-sm text-red-500 font-bold leading-tight text-right pr-4">Best Seller</p>
      <img src="https://images.pexels.com/photos/2416931/pexels-photo-2416931.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Image 1" className="w-full h-48 object-cover" />
      <div className="p-4">
        <div className="flex justify-between items-center">
          <p className="text-sm text-gray-600 mb-4 font-bold">Bengaluru, India</p>
          <div className="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-gray-800">
              <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
            </svg>
            <span className="ml-2 text-sm text-gray-800">5.0</span>
          </div>
        </div>
        <div className="space-y-1">
          <p className="text-sm text-gray-800 leading-tight">Stay with Kartik, ETHGlobal</p>
          <p className="text-sm text-gray-800 leading-tight">Aug 28 - 30</p>
          <p className="text-sm text-red-500 font-bold leading-tight">$80 night</p>
        </div>
      </div>
    </div>
    {/* Item 4 */}
    <div className="bg-gray rounded-lg overflow-hidden shadow-md mx-2"> {/* Add margin to each item */}
      <p className="text-sm text-red-500 font-bold leading-tight text-right pr-4"></p>
      <img src="https://images.pexels.com/photos/775219/pexels-photo-775219.jpeg" alt="Image 1" className="w-full h-48 object-cover" />
      <div className="p-4">
        <div className="flex justify-between items-center">
          <p className="text-sm text-gray-600 mb-4 font-bold">Sydney, Australia</p>
          <div className="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-gray-800">
              <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
            </svg>
            <span className="ml-2 text-sm text-gray-800">5.0</span>
          </div>
        </div>
        <div className="space-y-1">
          <p className="text-sm text-gray-800 leading-tight">Stay with Rich, DeFi</p>
          <p className="text-sm text-gray-800 leading-tight">Aug 19 - 23</p>
          <p className="text-sm text-red-500 font-bold leading-tight">$120 night</p>
        </div>
      </div>
    </div>
    {/* Item 5 */}
    <div className="bg-gray rounded-lg overflow-hidden shadow-md mx-2"> {/* Add margin to each item */}
      <p className="text-sm text-red-500 font-bold leading-tight text-right pr-4"></p>
      <img src="https://images.pexels.com/photos/5179593/pexels-photo-5179593.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Image 1" className="w-full h-48 object-cover" />
      <div className="p-4">
        <div className="flex justify-between items-center">
          <p className="text-sm text-gray-600 mb-4 font-bold">Waterloo, Canada</p>
          <div className="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-gray-800">
              <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
            </svg>
            <span className="ml-2 text-sm text-gray-800">5.0</span>
          </div>
        </div>
        <div className="space-y-1">
          <p className="text-sm text-gray-800 leading-tight">Stay with Jessica, Web3</p>
          <p className="text-sm text-gray-800 leading-tight">Sept 05 - 08</p>
          <p className="text-sm text-red-500 font-bold leading-tight">$100 night</p>
        </div>
      </div>
    </div>
    {/* Item 6 */}
    <div className="bg-gray rounded-lg overflow-hidden shadow-md mx-2"> {/* Add margin to each item */}
      <p className="text-sm text-red-500 font-bold leading-tight text-right pr-4"></p>
      <img src=" https://images.pexels.com/photos/14025911/pexels-photo-14025911.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Image 1" className="w-full h-48 object-cover" />
      <div className="p-4">
        <div className="flex justify-between items-center">
          <p className="text-sm text-gray-600 mb-4 font-bold">Rovaniemi, Finland</p>
          <div className="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-gray-800">
              <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
            </svg>
            <span className="ml-2 text-sm text-gray-800">5.0</span>
          </div>
        </div>
        <div className="space-y-1">
          <p className="text-sm text-gray-800 leading-tight">Stay with Gil, DeSci</p>
          <p className="text-sm text-gray-800 leading-tight">Aug 20 - 24</p>
          <p className="text-sm text-red-500 font-bold leading-tight">$170 night</p>
        </div>
      </div>
    </div>
    {/* Item 7 */}
    <div className="bg-gray rounded-lg overflow-hidden shadow-md mx-2"> {/* Add margin to each item */}
      <p className="text-sm text-red-500 font-bold leading-tight text-right pr-4"></p>
      <img src="https://images.pexels.com/photos/5178074/pexels-photo-5178074.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Image 1" className="w-full h-48 object-cover" />
      <div className="p-4">
        <div className="flex justify-between items-center">
          <p className="text-sm text-gray-600 mb-4 font-bold">Langoiran, France</p>
          <div className="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-gray-800">
              <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
            </svg>
            <span className="ml-2 text-sm text-gray-800">5.0</span>
          </div>
        </div>
        <div className="space-y-1">
          <p className="text-sm text-gray-800 leading-tight">Stay with Loren, ethCC</p>
          <p className="text-sm text-gray-800 leading-tight">Aug 10 - 24</p>
          <p className="text-sm text-red-500 font-bold leading-tight">$95 night</p>
        </div>
      </div>
    </div>
    {/* Item 8 */}
    <div className="bg-gray rounded-lg overflow-hidden shadow-md mx-2"> {/* Add margin to each item */}
      <p className="text-sm text-red-500 font-bold leading-tight text-right pr-4"></p>
      <img src="https://images.pexels.com/photos/5923080/pexels-photo-5923080.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Image 1" className="w-full h-48 object-cover" />
      <div className="p-4">
        <div className="flex justify-between items-center">
          <p className="text-sm text-gray-600 mb-4 font-bold">Park City, Utah</p>
          <div className="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-gray-800">
              <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
            </svg>
            <span className="ml-2 text-sm text-gray-800">5.0</span>
          </div>
        </div>
        <div className="space-y-1">
          <p className="text-sm text-gray-800 leading-tight">Stay with James, DePIN</p>
          <p className="text-sm text-gray-800 leading-tight">Aug 20 - 24</p>
          <p className="text-sm text-red-500 font-bold leading-tight">$100 night</p>
        </div>
      </div>
    </div>
    {/* Item 9 */}
    <div className="bg-gray rounded-lg overflow-hidden shadow-md mx-2"> {/* Add margin to each item */}
      <p className="text-sm text-red-500 font-bold leading-tight text-right pr-4"></p>
      <img src="https://images.pexels.com/photos/210604/pexels-photo-210604.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Image 1" className="w-full h-48 object-cover" />
      <div className="p-4">
        <div className="flex justify-between items-center">
          <p className="text-sm text-gray-600 mb-4 font-bold">San Francisco, US</p>
          <div className="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-gray-800">
              <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
            </svg>
            <span className="ml-2 text-sm text-gray-800">5.0</span>
          </div>
        </div>
        <div className="space-y-1">
          <p className="text-sm text-gray-800 leading-tight">Stay with Erik, Dev</p>
          <p className="text-sm text-gray-800 leading-tight">Aug 20 - 24</p>
          <p className="text-sm text-red-500 font-bold leading-tight">$70 night</p>
        </div>
      </div>
    </div>
    {/* Load More Button */}
    <div className="col-span-1 md:col-span-3 flex justify-center mt-4">
      <button className="bg-blue-500 text-white font-bold py-2 px-4 rounded-full">
        Load More
      </button>
    </div>
  </div>
</div>
      </main>
{/* Footer 1 */}
<footer className="footer bg-gray-200 text-gray-700 items-center h-auto fixed bottom-[60px] w-full z-10 px-4">
  <div className="flex justify-between items-center">
    <aside className="flex">
      <ul className="menu menu-horizontal space-x-2 lg:space-x-4 text-xs sm:text-sm lg:text-base">
        <li><a>about us.</a></li>
        <li><a>our team.</a></li>
        <li><a>investors.</a></li>
      </ul>
    </aside>
    <nav className="flex">
      <ul className="menu menu-horizontal space-x-2 lg:space-x-4 text-xs sm:text-sm lg:text-base">
        <li><a>careers.</a></li>
        <li><a>brand assets.</a></li>
        <li><a>X.</a></li>
        <li><a>@.</a></li>
      </ul>
    </nav>
  </div>
</footer>

{/* Footer 2 */}
<footer className="bg-primary text-primary-content h-[60px] w-full fixed bottom-0 z-0">
  <img
    src="https://img.freepik.com/free-vector/dynamic-blue-wave-curvy-banner-modern-presentation_1017-53629.jpg?t=st=1723192008~exp=1723195608~hmac=abf53dbd23650de1d4541c716220e61433988c90eeb073c9696403dd71d2828a&w=2000"
    alt="0xList-Logo"
    className="h-full w-full object-cover"/>
</footer>
    </div>
  );
};

export default PropertyForm;