import logo from './logo.svg';
import './App.css';
import Navigation from './components/Navigation';
import Main from './components/Main';
function App() {
  return (
    <>
      <div class="min-height-300 position-absolute w-100" style={{zIndex:-1,backgroundColor:"#7AB1CD"}}></div>
      <Navigation/>
      <Main/>
    </>
  );
}
export default App;
