import s from "./App.module.css";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";

function App() {
  return (
    <div className={s.body}>
      <Header />
      <Main />
    </div>
  );
}

export default App;
