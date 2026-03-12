import H1 from "../components/H1";
import H2 from "../components/H2";

function LandingPage() {
  return (
    <>
      <H1>Autoevaluación</H1>
      <p>Una pequeña aplicación para crear y responder encuestas.</p>

      <H2>Bibliotecas utilizadas</H2>

      <div className="grid gap-4 grid-cols-2">



      <div className="card bg-base-100 w-96 shadow-sm hover:bg-base-300 border border-primary">
        <div className="card-body">
          <h2 className="card-title text-primary"><svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1} strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-brand-react"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M6.306 8.711c-2.602 .723 -4.306 1.926 -4.306 3.289c0 2.21 4.477 4 10 4c.773 0 1.526 -.035 2.248 -.102" /><path d="M17.692 15.289c2.603 -.722 4.308 -1.926 4.308 -3.289c0 -2.21 -4.477 -4 -10 -4c-.773 0 -1.526 .035 -2.25 .102" /><path d="M6.305 15.287c-.676 2.615 -.485 4.693 .695 5.373c1.913 1.105 5.703 -1.877 8.464 -6.66c.387 -.67 .733 -1.339 1.036 -2" /><path d="M17.694 8.716c.677 -2.616 .487 -4.696 -.694 -5.376c-1.913 -1.105 -5.703 1.877 -8.464 6.66c-.387 .67 -.733 1.34 -1.037 2" /><path d="M12 5.424c-1.925 -1.892 -3.82 -2.766 -5 -2.084c-1.913 1.104 -1.226 5.877 1.536 10.66c.386 .67 .793 1.304 1.212 1.896" /><path d="M12 18.574c1.926 1.893 3.821 2.768 5 2.086c1.913 -1.104 1.226 -5.877 -1.536 -10.66c-.375 -.65 -.78 -1.283 -1.212 -1.897" /><path d="M11.5 12.866a1 1 0 1 0 1 -1.732a1 1 0 0 0 -1 1.732" /></svg> React</h2>
          <p>Biblioteca para crear interfaces de usuarios utilizando componentes.</p>
          <p>Enlace: <a className="link text-primary" href="https://es.react.dev/">React</a></p>
        </div>
      </div>


      <div className="card bg-base-100 w-96 shadow-sm hover:bg-base-300 border border-primary">
        <div className="card-body">
          <h2 className="card-title text-primary"><svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1} strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-switch-3"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 17h2.397a5 5 0 0 0 4.096 -2.133l.177 -.253m3.66 -5.227l.177 -.254a5 5 0 0 1 4.096 -2.133h3.397" /><path d="M18 4l3 3l-3 3" /><path d="M3 7h2.397a5 5 0 0 1 4.096 2.133l4.014 5.734a5 5 0 0 0 4.096 2.133h3.397" /><path d="M18 20l3 -3l-3 -3" /></svg> Wouter</h2>
          <p>Enrutador minimalista para React.</p>
          <p>Enlace: <a className="link text-primary" href="https://github.com/molefrog/wouter">Wouter</a></p>
        </div>
      </div>

      <div className="card bg-base-100 w-96 shadow-sm hover:bg-base-300 border border-primary">
        <div className="card-body">
          <h2 className="card-title text-primary"><svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1} strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-status-change"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 18a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" /><path d="M16 18a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" /><path d="M6 12v-2a6 6 0 1 1 12 0v2" /><path d="M15 9l3 3l3 -3" /></svg> Zustand</h2>
          <p>Biblioteca especializada en la gestión del estado global</p>
          <p>Enlace: <a className="link text-primary" href="https://zustand.docs.pmnd.rs/learn/getting-started/introduction">Zustand</a></p>
        </div>
      </div>


      <div className="card bg-base-100 w-96 shadow-sm hover:bg-base-300 border border-primary">
        <div className="card-body">
          <h2 className="card-title text-primary"><svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1} strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-flower"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M9 12a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" /><path d="M12 2a3 3 0 0 1 3 3c0 .562 -.259 1.442 -.776 2.64l-.724 1.36l1.76 -1.893c.499 -.6 .922 -1 1.27 -1.205a2.968 2.968 0 0 1 4.07 1.099a3.011 3.011 0 0 1 -1.09 4.098c-.374 .217 -.99 .396 -1.846 .535l-2.664 .366l2.4 .326c1 .145 1.698 .337 2.11 .576a3.011 3.011 0 0 1 1.09 4.098a2.968 2.968 0 0 1 -4.07 1.098c-.348 -.202 -.771 -.604 -1.27 -1.205l-1.76 -1.893l.724 1.36c.516 1.199 .776 2.079 .776 2.64a3 3 0 0 1 -6 0c0 -.562 .259 -1.442 .776 -2.64l.724 -1.36l-1.76 1.893c-.499 .601 -.922 1 -1.27 1.205a2.968 2.968 0 0 1 -4.07 -1.098a3.011 3.011 0 0 1 1.09 -4.098c.374 -.218 .99 -.396 1.846 -.536l2.664 -.366l-2.4 -.325c-1 -.145 -1.698 -.337 -2.11 -.576a3.011 3.011 0 0 1 -1.09 -4.099a2.968 2.968 0 0 1 4.07 -1.099c.348 .203 .771 .604 1.27 1.205l1.76 1.894c-1 -2.292 -1.5 -3.625 -1.5 -4a3 3 0 0 1 3 -3" /></svg> Daisy UI</h2>
          <p>Biblioteca para crear interfaces de usuarios utilizando componentes.</p>
          <p>Enlace: <a className="link text-primary" href="https://daisyui.com/">Daisy UI</a></p>
        </div>
      </div>

      <div className="card bg-base-100 w-96 shadow-sm hover:bg-base-300 border border-primary">
        <div className="card-body">
          <h2 className="card-title text-primary"><svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1} strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-coffee"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 14c.83 .642 2.077 1.017 3.5 1c1.423 .017 2.67 -.358 3.5 -1c.83 -.642 2.077 -1.017 3.5 -1c1.423 -.017 2.67 .358 3.5 1" /><path d="M8 3a2.4 2.4 0 0 0 -1 2a2.4 2.4 0 0 0 1 2" /><path d="M12 3a2.4 2.4 0 0 0 -1 2a2.4 2.4 0 0 0 1 2" /><path d="M3 10h14v5a6 6 0 0 1 -6 6h-2a6 6 0 0 1 -6 -6v-5" /><path d="M16.746 16.726a3 3 0 1 0 .252 -5.555" /></svg> Express</h2>
          <p>Framework para Node JS usada para crear una API REST.</p>
          <p>Enlace: <a className="link text-primary" href="https://expressjs.com/">Express</a></p>
        </div>
      </div>

      <div className="card bg-base-100 w-96 shadow-sm hover:bg-base-300 border border-primary">
        <div className="card-body">
          <h2 className="card-title text-primary"><svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1} strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-brand-tailwind"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M11.667 6c-2.49 0 -4.044 1.222 -4.667 3.667c.933 -1.223 2.023 -1.68 3.267 -1.375c.71 .174 1.217 .68 1.778 1.24c.916 .912 2 1.968 4.288 1.968c2.49 0 4.044 -1.222 4.667 -3.667c-.933 1.223 -2.023 1.68 -3.267 1.375c-.71 -.174 -1.217 -.68 -1.778 -1.24c-.916 -.912 -1.975 -1.968 -4.288 -1.968m-4 6.5c-2.49 0 -4.044 1.222 -4.667 3.667c.933 -1.223 2.023 -1.68 3.267 -1.375c.71 .174 1.217 .68 1.778 1.24c.916 .912 1.975 1.968 4.288 1.968c2.49 0 4.044 -1.222 4.667 -3.667c-.933 1.223 -2.023 1.68 -3.267 1.375c-.71 -.174 -1.217 -.68 -1.778 -1.24c-.916 -.912 -1.975 -1.968 -4.288 -1.968" /></svg> Tailwind CSS</h2>
          <p>Framework de CSS con <em>utility classes</em>.</p>
          <p>Enlace: <a className="link text-primary" href="https://tailwindcss.com/">Tailwind CSS</a></p>
        </div>
      </div>

      <div className="card bg-base-100 w-96 shadow-sm hover:bg-base-300 border border-primary">
        <div className="card-body">
          <h2 className="card-title text-primary"><svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1} strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-brand-vite"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M10 4.5l6 -1.5l-2 6.5l2 -.5l-4 7v-5l-3 1l1 -7.5" /><path d="M15 6.5l7 -1.5l-10 17l-10 -17l7.741 1.5" /></svg> Vite</h2>
          <p>Herramienta de construcción frontend.</p>
          <p>Enlace: <a className="link text-primary" href="https://vite.dev/">Vite</a></p>
        </div>
      </div>
            </div>
    </>
  );
}

export default LandingPage;
