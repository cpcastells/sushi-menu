import Header from "../Header/Header";
import Menu from "../Menu/Menu";
import AppStyled from "./AppStyled";

const App = (): React.ReactElement => {
  return (
    <AppStyled>
      <Header />
      <Menu />
    </AppStyled>
  );
};

export default App;
