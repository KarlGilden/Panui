const Navbar = () => {
  return (
    <nav className='absolute w-full px-28 flex items-center h-navbar'>
        <div>
            <p className='text-2xl font-bold'>Panui</p>
        </div>
        <div className='p-2'></div>
        <a href="/"><li className='list-none'>Home</li></a>
        <div className='p-2'></div>
        <a href="/dashboard"><li className='list-none'>Dashboard</li></a>        
    </nav>
  )
}

export default Navbar