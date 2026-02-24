import { Link } from "wouter";
import useAlumnoStore from "../store/useAlumnoStore";

function NavBar() {
  const email = useAlumnoStore(state => state.email);
  const nombre = useAlumnoStore(state => state.nombre);
  const admin = useAlumnoStore(state => state.admin);
  const logoutAlumno = useAlumnoStore(state => state.logoutAlumno);

  return (
    <>
      <div className="navbar bg-base-300 shadow-sm mb-4">
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
                <Link href="/mainAdmin">Administración</Link>
              </li>
            )}

            {email && (
                <li>
                  <Link href="/main">Principal</Link>
                </li>
              ) }
            {email && (
                <li>
                  <button className="btn btn-primary" onClick={logoutAlumno}>Cerrar sesión</button>
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
