import Card from '../Components/Card';
import { useCardStates } from '../Context/FetchContext/fetchContext';
import { useThemeStates } from '../Context/themeContext/ThemeContext';

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {
  const { cardState } = useCardStates();
  const { theme } = useThemeStates();

  return (
    <main
      style={{
        background: theme.background,
        color: theme.font,
        paddingBottom: '80px',
      }}
    >
      <h1 style={{margin: '25px'}}>Home</h1>
      <div className="card-grid">
        {cardState.cardList &&
          cardState.cardList.map((item) => <Card key={item.id} item={item} />)}
      </div>
    </main>
  );
};

export default Home;
