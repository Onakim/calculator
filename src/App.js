import "./App.css";
const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
function App() {
  return (
    <div className="app">
      <div className="container">
        <h1>Calculator</h1>
        <div className="app__inner">
          <p className="result">0</p>
          <div className="buttons">
            <div className="item">+</div>
            <div className="item">-</div>
            <div className="item">/</div>
            <div className="item">*</div>
            <div className="item">C</div>
            <div className="item item-result">=</div>
          </div>
          <div className="numbers">
            {numbers.map((item) => (
              <div key={`item-${item + 1}`} className="item">
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
