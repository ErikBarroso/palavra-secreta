import { useState } from "react";
import "./MyForm.css"

const MyForm = () => {
  // Gerenciamento de dados
  const [name, setName] = useState()
  const [email, setEmail] = useState();

  const handleName= (e) =>{
    //mudamos o estado da variável cada vez que digitamos algo no input
          setName(e.target.value);
  }

  return (
    <div>
      <form>
        <div>
          <label htmlFor="name">Nome:</label>
          <input type="text" name="name" placeholder="Digite seu nome" onChange={handleName}/>
        </div>
        {/* Forma sugerida pela doc do react */}
        <label>
          <span>E-mail:</span>
          <input type="email" name="email" placeholder="Digite o seu e-mail" />
        </label>
        <input type="submit" value="Enviar" />
      </form>
    </div>
  );
}

export default MyForm