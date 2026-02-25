import { Link } from "wouter";
import useUsuarioStore from "../store/useUsuarioStore";

function NavBar() {
  const email = useUsuarioStore(state => state.email);
  const nombre = useUsuarioStore(state => state.nombre);
  const admin = useUsuarioStore(state => state.admin);
  const logoutAlumno = useUsuarioStore(state => state.logoutAlumno);

  return (
    <>
      <div className="navbar bg-base-300 shadow-sm mb-4 fixed z-10">
        <div className="flex-1">
          <Link href="/" className="btn btn-ghost text-xl">
            Autoevaluación
          </Link>
        </div>
        <div className="flex-none">
          {email && (<span> {nombre} ({email}) </span>)}
          <ul className="menu menu-horizontal px-1">
            {!email && (
              <li>
                <Link href="/login">Login</Link>
              </li>
            )}

            {!email && (
              <li>
                <Link href="/registro">Registro</Link>
              </li>
            )}

            {admin && (
              <li>
                <Link href="/admin">Administración</Link>
              </li>
            )}

            {email && (
                <li>
                  <Link href="/main">Principal</Link>
                </li>
              ) }
            {email && (
                <li>
                  <button className="btn btn-primary" onClick={logoutAlumno}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-logout"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M14 8v-2a2 2 0 0 0 -2 -2h-7a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h7a2 2 0 0 0 2 -2v-2" /><path d="M9 12h12l-3 -3" /><path d="M18 15l3 -3" /></svg> Cerrar sesión</button>
                  {/* <Link href="/logout">Cerrar sesión</Link> */}
                </li>
              )}
          </ul>
        </div>
      </div>
    </>
  );
}

export default NavBar;
