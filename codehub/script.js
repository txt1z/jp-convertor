const PAYPAL_JPY_TO_INR_RATE = 0.63;

function getProfit(inrAmount) {
    if (inrAmount <= 500) return 50;
    if (inrAmount <= 1000) return 60;
    if (inrAmount <= 1500) return 70;
    if (inrAmount <= 2000) return 80;
    if (inrAmount <= 2500) return 90;
    if (inrAmount <= 3000) return 100;
    if (inrAmount <= 3500) return 125;
    if (inrAmount <= 4000) return 150;
    if (inrAmount <= 4500) return 175;
    if (inrAmount <= 5000) return 200;
    if (inrAmount <= 5500) return 225;
    if (inrAmount <= 6000) return 250;
    if (inrAmount <= 6500) return 275;
    if (inrAmount <= 7000) return 300;
    if (inrAmount <= 7500) return 325;
    if (inrAmount <= 8000) return 350;
    if (inrAmount <= 8500) return 375;
    if (inrAmount <= 9000) return 400;
    if (inrAmount <= 9500) return 425;
    if (inrAmount <= 10000) return 450;
    if (inrAmount <= 10500) return 475;
    if (inrAmount <= 11000) return 500;
    if (inrAmount <= 11500) return 525;
    if (inrAmount <= 12000) return 550;

    return null;
}

function quoteInINR() {
    const yenInput = document.getElementById("yenPrice");
    const resultEl = document.getElementById("result");

    const yen = parseFloat(yenInput.value);

    if (isNaN(yen) || yen <= 0) {
        alert("Please enter a valid item price in Yen.");
        return;
    }

    const yenWithHandling = yen * 1.05;
    const convertedINR = yenWithHandling * PAYPAL_JPY_TO_INR_RATE;

    if (convertedINR > 12000) {
        alert("The amount is too big for me to proxy, sorry!");
        resultEl.innerHTML = "";
        return;
    }

    const profit = getProfit(convertedINR);

    if (profit === null) {
        alert("The amount is too big for me to proxy, sorry!");
        resultEl.innerHTML = "";
        return;
    }

    const finalQuote = convertedINR + profit;

    resultEl.innerHTML = `
        <p><b>Item Price:</b> ¥${yen}</p>
        <p><b>After 5% Handling:</b> ¥${yenWithHandling.toFixed(2)}</p>
        <p><b>Converted INR:</b> ₹${convertedINR.toFixed(2)}</p>
        <p><b>Profit:</b> ₹${profit}</p>
        <p><b>Final Quote:</b> ₹${finalQuote.toFixed(2)}</p>
    `;
}
