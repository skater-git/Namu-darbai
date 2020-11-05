var rezultatai = document.getElementById('results');

fetch('https://api.coinlore.com/api/tickers/')
.then(results =>{
    return results.json();
}).then(data => {
    const info = data.data;
    console.log(info);
    var tr = document.createElement(tr);
    info.forEach(element => {
        (var i = 0; i < element.length; i++)
        var td = document.createElement(td);
        td.innerHTML = element[i].name;
        rezultatai.appendChild(tr);
        
    });





}).catch(error =>{
    console.log(error);
})