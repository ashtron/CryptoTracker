var obj;
$("document").ready(function(obj) {
  var endpoints = {
    "eth": "https://api.coinmarketcap.com/v1/ticker/ethereum/",
    "icn": "https://api.coinmarketcap.com/v1/ticker/iconomi/",
    "gnt": "https://api.coinmarketcap.com/v1/ticker/golem-network-tokens/"
  }

  function getData(coin) {
    $.get(endpoints[coin], function(data) {
      var price = data[0]["price_usd"];
      var percent_change_24h = data[0]["percent_change_24h"];
      var percent_change_7d = data[0]["percent_change_7d"];
      var volume = data[0]["24h_volume_usd"];
      var rank = data[0]["rank"];

      $(`.${coin}-price`).text(`$${price}`);
      $(`.${coin}-change-24h`).text(`${percent_change_24h}%`);
      $(`.${coin}-change-7d`).text(`${percent_change_7d}%`);
      $(`.${coin}-volume`).text(`$${volume}`);
      $(`.${coin}-rank`).text(rank);
    });
  }

  getData("eth");
  getData("icn");
  getData("gnt");
});
