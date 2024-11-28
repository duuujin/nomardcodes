import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./routes/Home";
import Detail from "./routes/Detail";

function App() {
  // ********** toDo List  사용 *********
  // const [toDo, setTodo] = useState("");
  // const [toDos,setToDos] = useState([]);
  // const onChange = (event) => setTodo(event.target.value);
  // const onSubmit = (event) => {
  //   event.preventDefault();
  //   if(toDo == ""){
  //     return;
  //   }
  //   setToDos(currentArray => [toDo, ...currentArray]);
  //   setTodo("");
  // };

  // ************ Coin Tracker 강의 *********
  // const [loading, setLoading] = useState(true);
  // const [coins, setCoins] = useState([])
  // useEffect(() => {
  //   fetch("https://api.coinpaprika.com/v1/tickers")
  //     .then((response) => response.json())
  //     .then((json) => {
  //       setCoins(json);
  //       setLoading(false);
  //     })
  // }, []);

  /* todo List !@! */
  /*  <h1>My To Dos ({toDos.length})</h1>
      <form onSubmit={onSubmit}>
        <input onChange={onChange} value={toDo} type="text" placeholder="Write your to do" />
        <button >Add To Do</button>
      </form>
      <hr />
      <ul>
        {toDos.map((item,index) => (
          <li key={index}>{item}</li>
        ))}
      </ul> */

  /* **************밑에서 부터는 Coin 강의******* */

  /* <h1>The Coins! {loading ? "" : `(${coins.length})`}</h1>
      {loading ? (<strong>Loading...</strong>
      ) : (
      <select>
        {coins.map((coin) => 
        <option>
          {coin.name} ({coin.symbol}): ${coin.quotes.USD.price} USD
        </option>)}
      </select>)} */

  return (
    <Router>
      <Routes>
        <Route path="/movie/:id" element={<Detail />}></Route>
        <Route path="/" element={<Home />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
