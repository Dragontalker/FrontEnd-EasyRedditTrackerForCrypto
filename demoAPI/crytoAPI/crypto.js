async function getDataCrypto() {
  var input = document.querySelector(".form-control").value;
  const url = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=cad&ids=${input}`;
  const [result] = await fetch(url).then((res) => res.json());

  //   const currencies = await fetch(
  //     `https://api.coingecko.com/api/v3/simple/supported_vs_currencies`
  //   ).then((res) => res.json());
  //   console.log(currencies);

  const name = result.id;
  const maxVal = result.high_24h;
  const minVal = result.low_24h;
  const logo = result.image;

  //////////////////need to parse values min and max

  document.querySelector(".displayCrypto").style = `display: block;`;

  document.querySelector(".logo").innerHTML = `<img src=${logo}>`;
  document.querySelector(".name").innerHTML = name.toUpperCase();
  document.querySelector("#max").innerHTML = `${maxVal}`;
  document.querySelector("#min").innerHTML = `${minVal}`;

  console.log(result, name, maxVal, minVal);
}

document.querySelector(".btn").addEventListener("click", getDataCrypto);
