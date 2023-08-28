const loadPhone = async (searchText , isShowAll) => {
  const res = await fetch(
    `https://openapi.programming-hero.com/api/phones?search=${searchText}`
  );
  const data = await res.json();
  const phones = data.data;
  // console.log(phones);
  displayPhone(phones, isShowAll);
};
const displayPhone = (phones, isShowAll) => {
  const phoneContsiner = document.getElementById("phone-container");
  // clear phone container card  before adding new card
  phoneContsiner.textContent = "";
  // console.log(phones.length);

  // display show all button if there are more than 12 phones
  const showALLContainer = document.getElementById("show-all-container");

  if (phones.length > 12 && !isShowAll) {
    showALLContainer.classList.remove("hidden");
  } else {
    showALLContainer.classList.add("hidden");
  }

  // display only first 12 phones if not show all
  if (!isShowAll) {
    phones = phones.slice(0, 12);
  }
  // console.log('isShowAll', isShowAll);

  phones.forEach((phone) => {
    // console.log(phone);
    const phoneCard = document.createElement("div");
    phoneCard.classList = `"card  bg-gray-100 p-4 shadow-xl"`;
    phoneCard.innerHTML = `
<div class="card w-96 bg-gray-100 shadow-xl">
<img src=" ${phone.image}" alt="phone" />
<div class="card-body">
  <h2 class="card-title">${phone.phone_name}</h2>
  <p>If a dog chews shoes whose shoes does he choose?</p>
  <div class="card-actions justify-center">
    <button onclick="handleShowDetails('${phone.slug}')" class="btn btn-primary">Show Details</button>
  </div>
</div>
</div>
    `;
    //  4 append child
    phoneContsiner.appendChild(phoneCard);
  });
  // hide loading spinner
  toggleLoadingSpinner(false);
};
//
const handleShowDetails = async (id) => {
  // load single phone data
  const res = await fetch(
    `https://openapi.programming-hero.com/api/phone/${id}`
  );

  const data = await res.json();
  // console.log(data);
  const phone = data.data;
  showPhoneDetails(phone);
};
const showPhoneDetails = (phone) => {
  console.log(phone);
  const phonename = document.getElementById("show-detail-phone-name");
  phonename.innerText = phone.name;
  const showDetailsContainer = document.getElementById("show-detail-container");
  showDetailsContainer.innerHTML = `
    <img src="${phone.image}" alt="" />
    <p><span>storage: </span>'${phone.mainFeatures.storage}'</p>
    <p><span>displaySize: </span>'${phone.mainFeatures.displaySize}'</p>
    <p><span>chipSet: </span>'${phone.mainFeatures.chipSet}'</p>
    <p><span>emory: </span>'${phone.mainFeatures.emory}'</p>
    <p><span>slug: </span>'${phone.slug}'</p>
    <p><releaseDate: </span>'${phone.releaseDate}'</p>
    <h2>"${phone.brand}"</h2>
    <p><span>releaseDate: </span>'${phone.mainFeatures.releaseDate}'</p>
    <p><span>releaseDate: </span>'${phone?.others?.GPS || 'No GPS'}'</p>
    
    `;

  // show the model
  show_details_model.showModal();
};

// handle search button
const handleSearch = (isShowAll) => {
  toggleLoadingSpinner(true);
  const searchField = document.getElementById("search-field");
  const searchText = searchField.value;
  // console.log(searchText);
  loadPhone(searchText, isShowAll);
};

const toggleLoadingSpinner = (isLoading) => {
  const loadingSpinner = document.getElementById("loading-spinner");
  if (isLoading) {
    loadingSpinner.classList.remove("hidden");
  } else {
    loadingSpinner.classList.add("hidden");
  }
};

// handle show all
const handleShowAll = () => {
  handleSearch(true);
};

// loadPhone();
