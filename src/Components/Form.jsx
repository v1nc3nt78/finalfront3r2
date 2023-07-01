import React from 'react';

const Form = ({ user, setUser, handleSubmit }) => {
  //Aqui deberan implementar el form completo con sus validaciones

  const handleChange = (event) => {
    setUser((prevUser) => ({
      ...prevUser,
      [event.target.name]: event.target.value,
    }));
  };
  console.log(user.name);

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input name="name" type="text" onChange={handleChange} placeholder='Ingrese su nombre' />
        <input name="email" type="email" onChange={handleChange} placeholder='Ingrese su e-mail'/>
        <button>enviar</button>
      </form>
    </div>
  );
};

export default Form;
