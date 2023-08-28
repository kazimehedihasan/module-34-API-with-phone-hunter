const loadPhone = async (searchText) => {
    const res = await fetch(`https://openapi.programming-hero.com/api/phones?search=${searchText}`);
    const data = await res.json();
    const phones = data.data;
    console.log(phones);
    displayPhone(phones);
}
const displayPhone = phones => {
    const phoneContsiner = document.getElementById('phone-container');
    // clear phone container card  before adding new card
    phoneContsiner.textContent = '';
    // console.log(phones.length);

// display show all button if there are more than 12 phones
const showALLContainer = document.getElementById('show-all-container');

if (phones.length > 12) {
    showALLContainer.classList.remove('hidden');
}
else{
    showALLContainer.classList.add('hidden');
}

    // display only first 12 phones
    phones = phones.slice(0, 12);



    phones.forEach(phone => {
        console.log(phone);
const phoneCard = document.createElement('div');
phoneCard.classList = `"card  bg-gray-100 p-4 shadow-xl"`;
phoneCard.innerHTML = `
<div class="card w-96 bg-gray-100 shadow-xl">
<img src=" ${phone.image}" alt="phone" />
<div class="card-body">
  <h2 class="card-title">${phone.phone_name}</h2>
  <p>If a dog chews shoes whose shoes does he choose?</p>
  <div class="card-actions justify-end">
    <button class="btn btn-primary">Buy Now</button>
  </div>
</div>
</div>
    `;
    //  4 append child
    phoneContsiner.appendChild(phoneCard)

    })
}



// handle search button click
const handleSearch =() => {
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    console.log(searchText);
loadPhone(searchText);

}
// loadPhone();
