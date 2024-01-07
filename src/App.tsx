import s from "./App.module.css";
import Cards from "./components/Cards/Cards";
import Header from "./components/Header/Header";

function App() {
  return (
    <div className={s.body}>
      <Header />
      <Cards />
    </div>
  );
}

export default App;
