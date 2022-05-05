import { Link } from "react-router-dom"
import CartWidget from "./CartWidget"

const NavBar = () => {
  return (
    <div className="navbar bg-stone-400">
        <div className="flex-initial">
          <Link to={"/"} className="btn btn-ghost normal-case text-xl text-gray-200">My Store</Link>
        </div>
        <div className="flex-1">
          <ul className="menu menu-horizontal p-0 text-gray-200 mx-auto">
            <li><Link to={"/category/groceries"}>Groceries</Link></li>
            <li tabIndex="0">
              <a>
                Technology
                <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"/></svg>
              </a>
              <ul className="p-2 bg-stone-500 z-10">
                <li><Link to={"/category/smartphones"}>Smartphones</Link></li>
                <li><Link to={"/category/laptops"}>Laptops</Link></li>
              </ul>
            </li>
            <li tabIndex="0">
              <a>
                Beauty
                <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"/></svg>
              </a>
              <ul className="p-2 bg-stone-500 z-10">
                <li><Link to={"/category/fragrances"}>Fragrances</Link></li>
                <li><Link to={"/category/skincare"}>Skincare</Link></li>
              </ul>
            </li>
            <li tabIndex="0">
              <a>
                Home
                <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"/></svg>
              </a>
              <ul className="p-2 bg-stone-500 z-10">
                <li><Link to={"/category/home-decoration"}>Decoration</Link></li>
                <li><Link to={"/category/furniture"}>Furniture</Link></li>
                <li><Link to={"/category/lighting"}>Lighting</Link></li>
              </ul>
            </li>
            <li tabIndex="0">
              <a>
                Clothes
                <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"/></svg>
              </a>
              <ul className="p-2 bg-stone-500 z-10">
                <li><Link to={"/category/tops"}>Tops</Link></li>
                <li><Link to={"/category/sunglasses"}>Sunglasses</Link></li>
                <li><Link to={"/category/mens-shirts"}>Mens-Shirts</Link></li>
                <li><Link to={"/category/mens-shoes"}>Mens-Shoes</Link></li>
                <li><Link to={"/category/mens-watches"}>Mens-Watches</Link></li>
                <li><Link to={"/category/womens-dresses"}>Womens-Dresses</Link></li>
                <li><Link to={"/category/womens-shoes"}>Womens-Shoes</Link></li>
                <li><Link to={"/category/womens-watches"}>Womens-Watches</Link></li>
                <li><Link to={"/category/womens-bags"}>Womens-Bags</Link></li>
                <li><Link to={"/category/womens-jewellery"}>Womens-Jewellery</Link></li>
              </ul>
            </li>
            <li tabIndex="0">
              <a>
                Auto
                <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"/></svg>
              </a>
              <ul className="p-2 bg-stone-500 z-10">
                <li><Link to={"/category/automotive"}>Automotive</Link></li>
                <li><Link to={"/category/motorcycle"}>Motorcycle</Link></li>
              </ul>
            </li>
          </ul>
        </div>
        <CartWidget/>
      </div>
  )
}
export default NavBar