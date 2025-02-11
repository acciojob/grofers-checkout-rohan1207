
const getSumBtn = document.createElement("button");
getSumBtn.textContent = "Get Total Price";
document.body.appendChild(getSumBtn);

const getSum = () => {
    
    let prices = [...document.querySelectorAll(".price")].map(td => Number(td.textContent));

   
    let sum = prices.reduce((acc, price) => acc + price, 0);

    
    let existingRow = document.querySelector("#total-row");
    if (existingRow) {
        existingRow.remove();
    }

   
    let newRow = document.createElement("tr");
    newRow.id = "total-row"; 
    newRow.innerHTML = `<td colspan="2" style="text-align: right; font-weight: bold;">Total Price: Rs ${sum}</td>`;

  
    let table = document.querySelector("#table");
    table.appendChild(newRow);
};


getSumBtn.addEventListener("click", getSum);
