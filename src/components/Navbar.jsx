import { Link } from 'react-router-dom';
//import LanguageSwitcher from './languageSwitch';

export default function Navbar() {
  return (
    <nav className="bg-green-700 text-white p-4 flex justify-between items-center">
      <Link to="/" className="font-bold text-xl">Jharkhand Stories</Link>
      <div className="flex gap-4 items-center">
        <Link to="/" className="hover:underline">Home</Link>
        <Link to="/places" className="hover:underline">Places</Link>
        <Link to="/products" className="hover:underline">Products</Link>
        <Link to="/about" className="hover:underline">About</Link>
        
      </div>
    </nav>
  )
}