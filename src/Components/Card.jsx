import { Link } from 'react-router-dom';
import { myRoutes } from '../Routes/utilties/myRoutes';
import { useThemeStates } from '../Context/themeContext/ThemeContext';
import { useFavState } from '../Context/FavsContext/FavContex';

const Card = ({ item }) => {
  const { theme } = useThemeStates();
  const { favsState, favsDispatch } = useFavState();

  const { name, username, id } = item;

  const addFav = () => {
    const findFav = favsState.favs.find((favs) => favs.id === item.id);
    if (!findFav) {
      favsDispatch({ type: 'ADD_FAV', payload: item });
    } else {
      alert('Ya está agregado');
    }
  };

  return (
    <div className="containerCards">
      <Link
        to={`${myRoutes.detail}${item.id}`}
        className="card"
        style={{
          background: theme.background,
          color: theme.font,
          borderRadius: '20px',
          height: '400px',
          width: '250px',
        }}
      >
        {/* <Link className="card" to={myRoutes.detail}> */}
        <img
          src="./images/doctor.jpg"
          alt=""
          style={{ width: '195px', 
          boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
          borderRadius: '15px' }}
        />
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <h3>{name}</h3>
          <h5>user: {username}</h5>
          <h5>user-id: {id}</h5>
        </div>
      </Link>

      {/* En cada card deberan mostrar en name - username y el id */}

      {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}

      {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
      <button
        onClick={addFav}
        className="favButton"
        style={{
          width: '70px',
          background: theme.background,
          color: theme.font,
        }}
      >
        Add fav
      </button>
    </div>
  );
};

export default Card;
