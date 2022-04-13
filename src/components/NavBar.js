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
        <div className="flex-none">
          <div className="dropdown dropdown-end">
            <label tabIndex="0" className="btn btn-ghost btn-circle" style={{paddingTop: 5, paddingRight:12}}>
              <div className="indicator">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                <span className="badge badge-sm indicator-item">1</span>
              </div>
            </label>
            <div tabIndex="0" className="mt-3 card card-compact dropdown-content w-52 bg-base-100 shadow">
              <div className="card-body">
                <span className="font-bold text-lg">1 Items</span>
                <span className="text-info">Subtotal: $9.99</span>
                <div className="card-actions">
                  <button className="btn btn-primary btn-block">View cart</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}
export default NavBar