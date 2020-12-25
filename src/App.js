import MainAppBar from './Components/MainAppBar';
import MainWorkspace from './Components/MainWorkspace';

export default function App() {
  return (
    <div className="App">
      <header className="App-header">
          <MainAppBar />
          <MainWorkspace />
      </header>
    </div>
  );
}