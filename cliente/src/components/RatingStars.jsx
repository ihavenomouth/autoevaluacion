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
      <div onChange={clickHandler} className="rating rating-lg rating-half" value="0" aria-label="0 star">
        <input 
          type="radio" 
          defaultChecked 
          name={name} 
          className="rating-hidden min-w-2" 
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

      <div className="my-4 text-primary/50">
        {
          <p>{
            mensajes[Math.floor(valor)]
          }</p>
        }
      </div>
    </>
  );
}

export default RatingStars;
