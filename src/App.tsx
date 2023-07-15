import EducationCard from "./components/Card/Card";
import s from "./App.module.css";
import Header from "./components/Header/Header";

function App() {
  return (
    <div className={s.body}>
      <Header />
      <EducationCard />
    </div>
  );
}

export default App;
