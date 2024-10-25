import { Link } from 'react-router-dom';

const Navbar = () => {

  return (
    <nav className="bg-blue-600 p-4">
      <div className="container mx-auto flex justify-between items-center">
       
        <div className="text-white text-2xl font-bold">
          <Link to="/">Shoppy</Link>
        </div>

        
        <div className="hidden md:flex space-x-6">
          <Link to={"/"} className="text-white hover:bg-blue-700 px-3 py-2 rounded">
            Login
          </Link>
          <Link to={"register"} className="text-white hover:bg-blue-700 px-3 py-2 rounded">
            Register
          </Link>
          <Link to={"products"} className="text-white hover:bg-blue-700 px-3 py-2 rounded">
            Product
          </Link>
        
        </div>

      </div>

     
    </nav>
  );
};

export default Navbar;
