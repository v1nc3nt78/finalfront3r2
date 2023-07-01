import Card from '../Components/Card';
import { useFavState } from '../Context/FavsContext/FavContex';
import { useThemeStates } from '../Context/themeContext/ThemeContext';

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = () => {
  const { theme } = useThemeStates();
  const { favsState } = useFavState();

  return (
    <div style={{ 
      background: theme.background, 
      color: theme.font,
      paddingBottom: '80px', 
      }}
      >
      <h1 style={{margin: '25px'}}>Dentists Favs</h1>
      <div className="card-grid">
        {favsState.favs &&
          favsState.favs.map((item) => (
            <div className="containerFavs" key={item.id}>
              <img
                src="./images/doctor.jpg"
                alt=""
                style={{ 
                  width: '195px', 
                  marginTop: '15px',  
                  boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
                borderRadius: '25px' }}
              />
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                }}
              >
                <h3 style={{marginTop: '35px'}}>{item.name}</h3>
                <h5>user: {item.username}</h5>
                <h5>user-id: {item.id}</h5>
              </div>
              {/* <Card item={item} /> */}
            </div>
          ))}
        {/* este componente debe consumir los destacados del localStorage */}
        {/* Deberan renderizar una Card por cada uno de ellos */}
      </div>
    </div>
  );
};

export default Favs;
