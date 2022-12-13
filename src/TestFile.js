import { useEffect, useState } from "react";

function TestFile() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  const [usd, setUsd] = useState(1);
  const [price, setPrice] = useState(1);

  const onChangeInPut = (event) => {
    setUsd(event.target.value);
    console.log(usd);
  };

  const onChangeBtcValue = (event) => {
    setPrice(event.target.value);
  };

  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
      .then((response) => response.json())
      .then((json) => {
        setCoins(json);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <h1>the Coins! {loading ? "" : `(${coins.length})`}</h1>

      <br></br>

      {/* 로딩하고 있다면 Loading이 보여지고 아니면 코인을 보여준다 */}
      {loading ? (
        <strong>Loading...</strong>
      ) : (
        <select onChange={onChangeBtcValue}>
          <option>select Coin!</option>
          {/* 중요 */}
          {coins.map((coin, index) => (
            <option key={index} value={coin.quotes.USD.price}>
              {coin.name} ({coin.symbol}) ${coin.quotes.USD.price} USD
            </option>
          ))}
        </select>
      )}
      <br></br>
      <input onChange={onChangeInPut} type="text" placeholder="$ "></input>
      <div>{usd / price}주 구매가능</div>
    </div>
  );
}
export default TestFile;
