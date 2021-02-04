//onlineNow points to the obj

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

  storeInputs(name);
  /////////////append a new div after the previous one
  const node = document.createElement("div");
  document.querySelector(".displayCrypto").appendChild(node);
  console.log(node);
  node.innerHTML = `<div class="cryptoItem"><div class="logo"><img src=${logo}></div>
                    <p class="name">${name.toUpperCase()}</p>
                    <p class="values">Max value last 24H: <span id="max">${maxVal}</span> CAD</p>
                    <p class="values">Min value last 24H: <span id="min">${minVal}</span> CAD</p></div>`;

  document.querySelector(".displayCrypto").style = `display: block;`;
  // console.log(result, name, maxVal, minVal);
}

function storeInputs(input) {
  onlineNow.saved.push(input);
  localStorage.onlineNow.saved = onlineNow.saved;
  console.log(onlineNow);
}

document.querySelector(".btn").addEventListener("click", getDataCrypto);
