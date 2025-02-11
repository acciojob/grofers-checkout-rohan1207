document.addEventListener("DOMContentLoaded", () => {
    const getSumBtn = document.querySelector("#getSumBtn");

    const getSum = () => {
      
        let prices = [...document.querySelectorAll(".price")].map(td => Number(td.textContent.trim()) || 0);
        
      
        let sum = prices.reduce((acc, price) => acc + price, 0);

       
        let ansElement = document.querySelector("#ans");
        ansElement.textContent = `Total Price: Rs ${sum}`;
    };

    getSumBtn.addEventListener("click", getSum);
});
