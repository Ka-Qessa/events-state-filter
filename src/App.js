import './App.css';
import Portfolio from './filter/Portfolio';
import { proects, filters } from './filter/data';

function App() {
  return (
    <div>
      <Portfolio proects={proects} filters={filters} />
    </div>
  );
}

export default App;