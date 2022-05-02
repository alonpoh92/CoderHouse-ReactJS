import CartWidget from "./CartWidget"

const NavBar = () => {
  return (
    <div className="navbar bg-stone-400">
        <div className="flex-initial">
          <a className="btn btn-ghost normal-case text-xl text-gray-200">My Store</a>
        </div>
        <div className="flex-1">
          <ul className="menu menu-horizontal p-0 text-gray-200 mx-auto">
            <li><a>Groceries</a></li>
            <li tabIndex="0">
              <a>
                Technology
                <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"/></svg>
              </a>
              <ul className="p-2 bg-stone-500 z-10">
                <li><a>Smartphones</a></li>
                <li><a>Laptops</a></li>
              </ul>
            </li>
            <li tabIndex="0">
              <a>
                Beauty
                <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"/></svg>
              </a>
              <ul className="p-2 bg-stone-500 z-10">
                <li><a>Fragances</a></li>
                <li><a>Skincare</a></li>
              </ul>
            </li>
            <li tabIndex="0">
              <a>
                Home
                <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"/></svg>
              </a>
              <ul className="p-2 bg-stone-500 z-10">
                <li><a>decoration</a></li>
                <li><a>Furniture</a></li>
                <li><a>Lighting</a></li>
              </ul>
            </li>
            <li tabIndex="0">
              <a>
                Clothes
                <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"/></svg>
              </a>
              <ul className="p-2 bg-stone-500 z-10">
                <li><a>Tops</a></li>
                <li><a>Sunglasses</a></li>
                <li><a>Mens-Shirts</a></li>
                <li><a>Mens-Shoes</a></li>
                <li><a>Mens-Watches</a></li>
                <li><a>Womens-Dresses</a></li>
                <li><a>Womens-Shoes</a></li>
                <li><a>Womens-Watches</a></li>
                <li><a>Womens-Bags</a></li>
                <li><a>Womens-Jewellery</a></li>
              </ul>
            </li>
            <li tabIndex="0">
              <a>
                Auto
                <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"/></svg>
              </a>
              <ul className="p-2 bg-stone-500 z-10">
                <li><a>Automotive</a></li>
                <li><a>Motorcycle</a></li>
              </ul>
            </li>
          </ul>
        </div>
        <CartWidget/>
      </div>
  )
}
export default NavBar