import React from "react";
import img from "../../assets/image/ovo.png";
import {StyeldNoContent} from './styled'

export const NoContent = () => {
  return (
    <StyeldNoContent>
    <div className="tudotudo">
      <div className="tudo">
        <div className="frases">
          <h1>404</h1>
          <h3>Page not found</h3>
        </div>
        <img src={img} alt="ovo quebrado" />
      </div>
      <footer>
        <p className="final">
          Desculpe, mas essa página não foi encontrada. Ela pode ter sido
          removida ou você pode ter digitado o endereço incorreto.
        </p>
      </footer>
    </div>
    </StyeldNoContent>
  );
};