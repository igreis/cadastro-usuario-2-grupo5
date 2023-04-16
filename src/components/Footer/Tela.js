import React, {useEffect} from "react";
import '../Header/estilo.css'


function Tela(){

    useEffect(() => {
        document.body.classList.add('outra-tela');
        return () => {
          document.body.classList.remove('outra-tela');
        };
      }, []);
    return (
        <div className="container">
            <p className="name">
                
            </p>
        </div>
    )
}

export default Tela