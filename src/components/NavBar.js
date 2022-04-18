import CartWidget from "./CartWidget"

const NavBar = () => {
  return (
    <div className="navbar bg-stone-400">
        <div className="flex-initial">
          <a className="btn btn-ghost normal-case text-xl text-gray-200">Mi Tiendita</a>
        </div>
        <div className="flex-1">
          <ul className="menu menu-horizontal p-0 text-gray-200 mx-auto">
            <li><a>Comida</a></li>
            <li tabIndex="0">
              <a>
                Tecnología
                <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"/></svg>
              </a>
              <ul className="p-2 bg-stone-500">
                <li><a>Celulares</a></li>
                <li><a>Laptops</a></li>
              </ul>
            </li>
            <li tabIndex="0">
              <a>
                Belleza
                <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"/></svg>
              </a>
              <ul className="p-2 bg-stone-500">
                <li><a>Fragancias</a></li>
                <li><a>Skincare</a></li>
              </ul>
            </li>
            <li tabIndex="0">
              <a>
                Hogar
                <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"/></svg>
              </a>
              <ul className="p-2 bg-stone-500">
                <li><a>Decoración</a></li>
                <li><a>Muebles</a></li>
                <li><a>Iluminación</a></li>
              </ul>
            </li>
            <li tabIndex="0">
              <a>
                Ropa
                <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"/></svg>
              </a>
              <ul className="p-2 bg-stone-500">
                <li><a>Camisetas</a></li>
                <li><a>Gafas</a></li>
                <li><a>Hombre-Camisetas</a></li>
                <li><a>Hombre-Zapatos</a></li>
                <li><a>Hombre-Relojes</a></li>
                <li><a>Mujer-Vestidos</a></li>
                <li><a>Mujer-Zapatos</a></li>
                <li><a>Mujer-Relojes</a></li>
                <li><a>Mujer-Maletas</a></li>
                <li><a>Mujer-Joyería</a></li>
              </ul>
            </li>
          </ul>
        </div>
        <CartWidget/>
      </div>
  )
}
export default NavBar