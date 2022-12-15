import { useEffect, useState } from "react";

function FnCoin() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  const [usd, setUsd] = useState(1);
  const [price, setPrice] = useState(1);

  // input value를 useState를 통해서 usd에 저장
  const onChangeInPut = (event) => {
    setUsd(event.target.value);
    console.log(usd);
  };

  // 선택한 option의 가격 useState를 통해서 price에 저장
  const onChangeBtcValue = (event) => {
    setPrice(event.target.value);
  };
  // 단 한번만 실행함 useEffect((),[])
  useEffect(() => {
    // api내용 불러오기
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
          {/* 아래 구문 이해를 돕기위한 영상 링크 */}
          {/* https://youtu.be/r8ctNYtWCWk */}
          {coins.map((coin, index) => (
            <option key={index} value={coin.quotes.USD.price}>
              {/* api */}
              {/* 코인이름 */} {/* 코인 심볼 */} {/* 코인 가격 */}
              {coin.name} ({coin.symbol}) ${coin.quotes.USD.price} USD
            </option>
          ))}
        </select>
      )}
      <br></br>
      <input onChange={onChangeInPut} type="text" placeholder="$ "></input>
      <div>{usd / price} Available for purchase</div>
    </div>
  );
}
export default FnCoin;
