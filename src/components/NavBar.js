import { Link, NavLink} from "react-router-dom"
import CartWidget from "./CartWidget"

const NavBar = () => {
  return (
    <div className="navbar bg-stone-400">
        <div className="flex-initial">
          <Link to={"/"} className="btn btn-ghost normal-case text-xl text-gray-200">My Store</Link>
        </div>
        <div className="flex-1">
          <ul className="menu menu-horizontal p-0 text-gray-200 mx-auto">
            <li><NavLink to={"/category/groceries"}>Groceries</NavLink></li>
            <li tabIndex="0">
              <a className="nav-gropup">
                Technology
                <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"/></svg>
              </a>
              <ul className="p-2 bg-stone-500 z-10">
                <li><NavLink to={"/category/smartphones"}>Smartphones</NavLink></li>
                <li><NavLink to={"/category/laptops"}>Laptops</NavLink></li>
              </ul>
            </li>
            <li tabIndex="0">
              <a className="nav-gropup">
                Beauty
                <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"/></svg>
              </a>
              <ul className="p-2 bg-stone-500 z-10">
                <li><NavLink to={"/category/fragrances"}>Fragrances</NavLink></li>
                <li><NavLink to={"/category/skincare"}>Skincare</NavLink></li>
              </ul>
            </li>
            <li tabIndex="0">
              <a className="nav-gropup">
                Home
                <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"/></svg>
              </a>
              <ul className="p-2 bg-stone-500 z-10">
                <li><NavLink to={"/category/home-decoration"}>Decoration</NavLink></li>
                <li><NavLink to={"/category/furniture"}>Furniture</NavLink></li>
                <li><NavLink to={"/category/lighting"}>Lighting</NavLink></li>
              </ul>
            </li>
            <li tabIndex="0">
              <a className="nav-gropup">
                Clothes
                <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"/></svg>
              </a>
              <ul className="p-2 bg-stone-500 z-10">
                <li><NavLink to={"/category/tops"}>Tops</NavLink></li>
                <li><NavLink to={"/category/sunglasses"}>Sunglasses</NavLink></li>
                <li><NavLink to={"/category/mens-shirts"}>Mens-Shirts</NavLink></li>
                <li><NavLink to={"/category/mens-shoes"}>Mens-Shoes</NavLink></li>
                <li><NavLink to={"/category/mens-watches"}>Mens-Watches</NavLink></li>
                <li><NavLink to={"/category/womens-dresses"}>Womens-Dresses</NavLink></li>
                <li><NavLink to={"/category/womens-shoes"}>Womens-Shoes</NavLink></li>
                <li><NavLink to={"/category/womens-watches"}>Womens-Watches</NavLink></li>
                <li><NavLink to={"/category/womens-bags"}>Womens-Bags</NavLink></li>
                <li><NavLink to={"/category/womens-jewellery"}>Womens-Jewellery</NavLink></li>
              </ul>
            </li>
            <li tabIndex="0">
              <a className="nav-gropup">
                Auto
                <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"/></svg>
              </a>
              <ul className="p-2 bg-stone-500 z-10">
                <li><NavLink to={"/category/automotive"}>Automotive</NavLink></li>
                <li><NavLink to={"/category/motorcycle"}>Motorcycle</NavLink></li>
              </ul>
            </li>
          </ul>
        </div>
        <CartWidget/>
      </div>
  )
}
export default NavBar