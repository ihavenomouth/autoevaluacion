import { useState } from "react";

function RatingStars({name, onNotaChange}) {
  
  const [valor, setValor] = useState(0);
  
  const mensajes=["Mal, copiado, incompleto o con muchos errores graves.", "Sin terminar o con errores importantes", "Lo mínimo exigible.", "Bien, aunque con pequeños errores.", "Muy bien o prácticamente perfecto.", "Perfecto."]

  // Función puente para actualizar el estado local (para el mensaje)
  // y el estado del padre (para el guardado final)
  const clickHandler = (e) => {
    const nuevaNota = parseFloat(e.target.value);
    setValor(nuevaNota);
    onNotaChange(nuevaNota);
  };


  return (
    <>
    <div className="flex gap-4 items-center">

      
      <button className="btn btn-ghost btn-square border border-primary" onClick={(e)=>{
        setValor(0);
        onNotaChange(0);
        e.target.closest("button").nextElementSibling.firstElementChild.checked=true; //TODO: mejorable
      }}>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" strokeDasharray={"2"} stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-star-off"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 3l18 18" /><path d="M10.012 6.016l1.981 -4.014l3.086 6.253l6.9 1l-4.421 4.304m.012 4.01l.588 3.426l-6.158 -3.245l-6.172 3.245l1.179 -6.873l-5 -4.867l6.327 -.917" /></svg>
      </button>

      <div onChange={clickHandler} className="rating rating-lg rating-half bg-base-300 rounded p-2 pr-6" value="0" aria-label="0 star">
        <input 
          type="radio" 
          defaultChecked 
          name={name} 
          className="rating-hidden min-w-4" 
          aria-label="0 star"
          value="0"
          />
        <input
          type="radio"
          name={name}
          className="mask mask-star-2 mask-half-1 bg-primary"
          aria-label="0.5 star"
          value="0.1"
          />
        <input
          type="radio"
          name={name}
          className="mask mask-star-2 mask-half-2 bg-primary"
          aria-label="1 star"
          value="0.2"
          />
        <input
          type="radio"
          name={name}
          className="mask mask-star-2 mask-half-1 bg-primary"
          aria-label="1.5 star"
          value="0.3"
          />
        <input
          type="radio"
          name={name}
          className="mask mask-star-2 mask-half-2 bg-primary"
          aria-label="2 star"
          value="0.4"
          />
        <input
          type="radio"
          name={name}
          className="mask mask-star-2 mask-half-1 bg-primary"
          aria-label="2.5 star"
          value="0.5"
          />
        <input
          type="radio"
          name={name}
          className="mask mask-star-2 mask-half-2 bg-primary"
          aria-label="3 star"
          value="0.6"
          />
        <input
          type="radio"
          name={name}
          className="mask mask-star-2 mask-half-1 bg-primary"
          aria-label="3.5 star"
          value="0.7"
          />
        <input
          type="radio"
          name={name}
          className="mask mask-star-2 mask-half-2 bg-primary"
          aria-label="4 star"
          value="0.8"
          />
        <input
          type="radio"
          name={name}
          className="mask mask-star-2 mask-half-1 bg-primary"
          aria-label="4.5 star"
          value="0.9"
          />
        <input
          type="radio"
          name={name}
          className="mask mask-star-2 mask-half-2 bg-primary"
          aria-label="5 star"
          value="1"
          />
      </div>
      </div>

      <div className="my-4 text-primary/50">
        {
          <p>{
            mensajes[Math.floor(valor*5)]
          }</p>
        }
      </div>
    </>
  );
}

export default RatingStars;
