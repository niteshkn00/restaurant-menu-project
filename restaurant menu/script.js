document.getElementById("calculateBill").addEventListener("click", function () {
    const inputs = document.querySelectorAll("#menuForm input[type='number']");
    const billDetails = document.getElementById("billDetails");
    const billItems = document.getElementById("billItems");
    const totalAmount = document.getElementById("totalAmount");

    let total = 0;
    let details = "";

    inputs.forEach(input => {
        const quantity = parseInt(input.value);
        const price = parseFloat(input.getAttribute("data-price"));

        if (quantity > 0) {
            const cost = quantity * price;
            total += cost;
            details += `<li>${input.name} x ${quantity} = ₹${cost.toFixed(2)}</li>`;
        }
    });

    billItems.innerHTML = details;
    totalAmount.textContent = total.toFixed(2);

    if (total > 0) {
        billDetails.classList.remove("hidden");
    } else {
        billDetails.classList.add("hidden");
    }
});
