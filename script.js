const users = [
  {
    name: "John Doe",
    image: "https://randomuser.me/api/portraits/men/1.jpg",
    about: "Frontend Developer"
  },
  {
    name: "Emma Watson",
    image: "https://randomuser.me/api/portraits/women/2.jpg",
    about: "UI/UX Designer"
  },
  {
    name: "Michael Lee",
    image: "https://randomuser.me/api/portraits/men/3.jpg",
    about: "Backend Developer"
  },
  {
    name: "Sophia Brown",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
    about: "Content Creator"
  },
  {
    name: "David Smith",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
    about: "Software Engineer"
  },
  {
    name: "Olivia Taylor",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
    about: "Digital Marketer"
  },
  {
    name: "James Wilson",
    image: "https://randomuser.me/api/portraits/men/7.jpg",
    about: "Graphic Designer"
  },
  {
    name: "Isabella Moore",
    image: "https://randomuser.me/api/portraits/women/8.jpg",
    about: "Photographer"
  },
  {
    name: "Daniel Clark",
    image: "https://randomuser.me/api/portraits/men/9.jpg",
    about: "App Developer"
  },
  {
    name: "Mia Anderson",
    image: "https://randomuser.me/api/portraits/women/10.jpg",
    about: "Video Editor"
  }
];

const cardsContainer = document.getElementById("cards-container");
const searchInput = document.getElementById("search");

function showUsers(arr) {

  cardsContainer.innerHTML = "";

  arr.forEach(function(user) {

    cardsContainer.innerHTML += `
      <div class="card">
        <img src="${user.image}" alt="">
        <h2>${user.name}</h2>
        <p>${user.about}</p>
      </div>
    `;

  });

}

showUsers(users);

searchInput.addEventListener("input", () => {

  const value = searchInput.value.toLowerCase();

  const filteredUsers = users.filter(user =>
    user.name.toLowerCase().includes(value)
  );

  showUsers(filteredUsers);

});