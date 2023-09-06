import "./App.css";
import Header from "./components/Header";
import NotesListPage from "./pages/NotesListPage";

function App() {
  return (
    <div className="container dark">
      <div className="app">
        <Header />
        <NotesListPage />
      </div>
    </div>
  );
}

export default App;
