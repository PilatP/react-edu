import { Counter } from './components/Counter';

function App() {
  return (
    <div className="App" role="application">
      <Counter initialValue={1} />
      <div>one more counter</div>
    </div>
  );
}

export { App };
