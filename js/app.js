$("document").ready(function() {
  var totalValue = 0.0;

  var coinData = {
    "eth": { endpoint: "https://api.coinmarketcap.com/v1/ticker/ethereum/", balance: 50 },
    "icn": { endpoint: "https://api.coinmarketcap.com/v1/ticker/iconomi/", balance: 1683.30152 },
    "gnt": { endpoint: "https://api.coinmarketcap.com/v1/ticker/golem-network-tokens/", balance: 1073.56468201 }
  }

  var totalValue = coinData["eth"]["balance"] + coinData["icn"]["balance"] + coinData["gnt"]["balance"];

  function getData(coin) {
    $.get(coinData[coin]["endpoint"], function(data) {
      var price = data[0]["price_usd"];
      var percent_change_24h = data[0]["percent_change_24h"];
      var percent_change_7d = data[0]["percent_change_7d"];
      var volume = data[0]["24h_volume_usd"];
      var rank = data[0]["rank"];
      var balance = coinData[coin]["balance"];

      $(`.${coin}-price`).text(`$${price}`);
      $(`.${coin}-change-24h`).text(`${percent_change_24h}%`);
      $(`.${coin}-change-7d`).text(`${percent_change_7d}%`);
      $(`.${coin}-volume`).text(`$${volume}`);
      $(`.${coin}-rank`).text(rank);
      $(`.${coin}-balance`).text(balance);
      $(`.${coin}-usd-balance`).text(`$${price * balance}`);

      totalValue += price * balance;
      $(".total-value").text(`$${format(totalValue)}`);
    });
  }

  function format(num) {
    num = Number(Number(num).toFixed(2));
    return num.toLocaleString();
  }

  getData("eth");
  getData("icn");
  getData("gnt");
});
