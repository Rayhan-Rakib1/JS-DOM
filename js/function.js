function donate(id1, id2, name) {
    console.log(id1)
    const donateAmount = document.getElementById(id1).value;
    const amountNumber = parseFloat(donateAmount);

    const donateBalance = document.getElementById(id2).innerText;
    const balanceNumber = parseFloat(donateBalance);

    const newAmount = document.getElementById('new-amount').innerText;
    const newNumber = parseFloat(newAmount)
    if (amountNumber < 0) {
        alert('provide a number');
        return;
    }
    if (!isNaN(amountNumber)) {
        if (newNumber < amountNumber) {
            alert('provide a number')
            return;
        }
        const newDonateBalance = balanceNumber + amountNumber;
        document.getElementById(id2).innerText = newDonateBalance;
        const myBalance = newNumber - amountNumber;
        document.getElementById('new-amount').innerText = myBalance
        document.getElementById('my_modal_3').showModal()
        document.getElementById('pop-up-section').innerHTML =
            `
        <div class="text-center">
            <h1>Congratulations</h1>
        <img class='mx-auto' src="assets/coin.png" alt="" >
        <h1 class="font-bold">You have donated for ${name}</h1>
        <h1 class="font-bold text-2xl">Successfully</h1>
         <form method="dialog">
     <button class="btn mt-5  btn-ghost bg-slate-400 p-3  top-2">Close</button>
   </form>
        </div>
        `
        const div = document.createElement('div');
        div.innerHTML = `
         <div class="border-2 shadow-xl p-5 my-4 rounded-md text-lg">
         <p>${amountNumber} taka is donated for ${name}</p>
         <p>${Date().toLocaleString('en-GB', { timeZone: 'GMT' })}</p></div>
        `
        document.getElementById('Transaction').appendChild(div);
    }
    else {
        alert('provide number');
    }
}

function showSectionById(id1, id2, id3) {
    document.getElementById('donate-form').classList.add('hidden');
    document.getElementById('faq-form').classList.add('hidden');
    document.getElementById('history-form').classList.add('hidden');

    document.getElementById(id1).classList.remove('hidden');
    if (id1 === "faq-form") {
        document.getElementById(id2).classList.remove('bg-lime-400');
        document.getElementById(id3).classList.remove('bg-lime-400');
    }
    else {
        document.getElementById(id2).classList.add('bg-lime-400');
        document.getElementById(id3).classList.remove('bg-lime-400');
    }

}