let sun = document.querySelector("#sun"),
  moon = document.querySelector("#moon"),
  body = document.querySelector("body"),
  cart = document.querySelector("#cart"),
  closeShopping = document.querySelector(".closeShopping"),
  homeBg = document.querySelector(".home_bg"),
  leftArrow = document.querySelector(".leftArrow"),
  rightArrow = document.querySelector(".rightArrow"),
  imageIcons = document.querySelectorAll(".image-icon"),
  list = document.querySelector(".product-right-bottom"),
  li = document.querySelectorAll(".list"),
  circle = document.querySelectorAll(".fa-circle"),
  allList = document.querySelector(".all-list"),
  listCard = document.querySelector(".listCard");
let total = document.querySelector(".total");
let quanity = document.querySelector(".quantity");
let bookType = document.querySelectorAll(".book-type");
const navMenu = document.getElementById("nav_menu"),
  navToggle = document.getElementById("nav-toggle"),
  navClose = document.getElementById("nav-close");
let products = [
  {
    id: 0,
    type: "modern",
    title: "big magic",
    author: "donna karan",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWia-gpDhS1GwEOQBa4FYSJ_THZSECDPNle7XOwTrGHDJwyqVdCSvOaGK5NPnh-aMd9_s&usqp=CAU",
    price: 20.0,
  },
  {
    id: 1,
    type: "classic",
    title: "i was born width music",
    author: "dolce & cabanna",
    image: "https://dcassetcdn.com/design_img/894043/92203/92203_5562138_894043_image.jpg",
    price: 200.0,
  },
  {
    id: 2,
    type: "biography",
    title: "i'm glad my mom died",
    author: "jennette mcCurdy",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4fBh3vbGWNnZUtDlqRRv7eqmLM9KQe6tht4FMdVCu0LGjQnbrraw5Ux-UkUSxVq21ltM&usqp=CAU",
    price: 21.99,
  },
  {
    id: 3,
    type: "detective",
    title: "Warrior Soul: A Tye Caine Wilderness Mystery",
    author: "David Barbur",
    image: "https://m.media-amazon.com/images/I/51XTCop+G0L._SL500_.jpg",
    price: 4.99,
  },
  {
    id: 4,
    type: "fantasy",
    title: "The Mountain in the Sea: A Novel",
    author: "Ray Nayler",
    image: "https://www.bookcoversart.com/wp-content/uploads/2018/03/Tomorrows-Dawn-4-Post-Apocalyptic-Dystopian-SciFi-SF-Book-Cover.jpg",
    price: 18.0,
  },
  {
    id: 5,
    type: "cookbook",
    title: "Sweet Enough: A Dessert Cookbook",
    author: "Alison Roman",
    image: "https://thebookcoverdesigner.com/wp-content/uploads/2019/11/Apocalypse-Post-Apocalyptic-Action-Military-Premade-Book-Cover-After.jpg",
    price: 32.55,
  },
  {
    id: 6,
    type: "fairy tale",
    title: "Fairy Tale",
    author: "Stephen King",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhgfY1xrROsfHRWiS6uCb1Ou5qrvSfK1fmVJL1-G8mn1YMvDHo51q-GKyigl15QJForeg&usqp=CAU",
    price: 30.23,
  },
  {
    id: 7,
    type: "fiction",
    title: "Flash Fiction America: 73 Very Short Stories",
    author: "John DuFresne , et al.",
    image: "https://thebookcoverdesigner.com/wp-content/uploads/2022/04/departure-from-track-1-324x519.jpg",
    price: 15.76,
  },
  {
    id: 8,
    type: "horror",
    title: "Taaqtumi: An Anthology of Arctic Horror Stories",
    author: "Thomas Anguti Johnston , et al.",
    image: "https://thebookcoverdesigner.com/wp-content/uploads/2024/11/t-all-lost-things-324x519.jpg",
    price: 15.76,
  },
  {
    id: 9,
    type: "historical fiction",
    title:
      "The Things We Cannot Say: A WWII Historical Fiction Novel (Original)",
    author: "Kelly Rimmer",
    image: "https://i0.wp.com/www.paperandsage.com/wp-content/uploads/2020/02/200212TA01.jpg?fit=400%2C630&ssl=1",
    price: 15.8,
  },
  {
    id: 10,
    type: "history",
    title: "The Secret History",
    author: "Donna Tartt",
    image: "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/kindle-ebook-book-cover-path-in-forest-design-template-d89f870c1425191ef3a23a392f7f1fe7_screen.jpg?ts=1637009210",
    price: 16.74,
  },
  {
    id: 11,
    type: "romance",
    title: "Daughter of the Moon Goddess: A Fantasy Romance Novel",
    author: "Sue Lynn Tan",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOFde05zyTI_17rOJ75bLhdNJTabz8DXNk2Q&s",
    price: 16.73,
  },
  {
    id: 12,
    type: "modern",
    title: "Women Without Men: A Novel of Modern Iran",
    author: "Shahrnush Parsipur , et al.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS37tp1S08PT_YK24xp3xTsaMB_ScUKAN-Wsw&s",
    price: 14.83,
  },
  {
    id: 13,
    type: "classic",
    title: "War and Peace",
    author: "Leo Tolstoy , et al.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYXNdjG4edgJagTsZzf5Os2gRl-rUz-8u70w&s",
    price: 20.46,
  },
  {
    id: 14,
    type: "biography",
    title: "Barkley: A Biography (Original)",
    author: "Timothy Bella",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPMGbpVtCBhnqK8mnD9c7IyhoH7lJqeLqZtg&s",
    price: 27.89,
  },
  {
    id: 15,
    type: "detective",
    title: "The Detective Up Late",
    author: "Adrian McKinty",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSG7ekxu3OzvIQLn2K9bnYPHvNlHiVnR216eg&s",
    price: 25.1,
  },
  {
    id: 16,
    type: "fantasy",
    title: "Legends & Lattes: A Novel of High Fantasy and Low Stakes",
    author: "Travis Baldree",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzRqLAJzXdQtPqYzdxEVfeb5VZ4US-2RtNew&s",
    price: 16.73,
  },
  {
    id: 17,
    type: "cookbook",
    title: "The Everlasting Meal Cookbook: Leftovers A-Z",
    author: "Tamar Adler , et al.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRykNuuaHS_kE8nVDnfRYGMfW6oO2KSOtFpfw&s",
    price: 32.55,
  },
  {
    id: 18,
    type: "fairy tale",
    title: "Fairy Tales for Fearless Girls",
    author: "Anita Ganeri , et al.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsfxrcUtlaLqSTTpA7N9cWKIopvRNtXngM2A&s",
    price: 18.59,
  },
  {
    id: 19,
    type: "fiction",
    title: "Wonderbook (Revised and Expanded)",
    author: "Jeff VanderMeer",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBnCz7Xe0GujbdQTvtgeVtn7cuuqGJqrZ9-Q&s",
    price: 25.58,
  },
  {
    id: 20,
    type: "horror",
    title: "Nightmare Fuel: The Science of Horror Films",
    author: "Nina Nesseth",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSumTR2WO4rEfHmeY4sFp6-KMfLIJasCzohZA&s",
    price: 24.17,
  },
  {
    id: 21,
    type: "historical fiction",
    title: "Falconland: A Novel of Medieval",
    author: "Reggie Connell",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2KuFBHfsxQZK3XSsXtiRqaXOWcRn2MId1Tw&s",
    price: 14.99,
  },
  {
    id: 22,
    type: "history",
    title: "We Are the Land: A History of Native California",
    author: "Damon B. Akins , et al.",
    image: "https://marketplace.canva.com/EAFfSnGl7II/2/0/1003w/canva-elegant-dark-woods-fantasy-photo-book-cover-vAt8PH1CmqQ.jpg",
    price: 27.85,
  },
  {
    id: 23,
    type: "romance",
    title: "Rough Around the Hedges: an Uncanny Romance Novel",
    author: "Lish McBride",
    image: "https://images.unsplash.com/photo-1554224154-22dec7ec8818",
    price: 16.73,
  },
];
navToggle.addEventListener("click", () => {
  navMenu.classList.add("show-menu");
});
let listCards = [];
function initApp() {
  products.forEach((value, key) => {
    let newDiv = document.createElement("div");
    newDiv.classList.add("book-card");
    newDiv.setAttribute("data-item", `${value.type}`);
    newDiv.innerHTML = `
    <div class="book-image">
    <img src="${value.image}" alt="" class="book-imagish" />
  </div>
  <div class="book-details">
    <div class="book-type">${value.type}</div>
    <div class="book-title">${value.title}</div>
    <div class="book-author">${value.author}</div>
    <div class="book-price">
      <span class="book-price-symbol">$</span>${value.price}
    </div>
    <div class="buttons">
      <button class="addToCart" onclick="addToCard(${key})">Add to cart</button>
      <i class="ri-heart-line" id="heart"></i>
      <i class='bx bx-dots-vertical-rounded options' onclick="option(${key})" ></i>
      <div class="inOption">
                  <i class='bx bx-pencil' onclick="renameItem(${key})"></i>
                  <i class="fa-solid fa-trash" onclick="removeItem(this)"></i>
                </div>
    </div>
  </div>
    `;
    list.appendChild(newDiv);
  });
}
initApp();
navClose.addEventListener("click", () => {
  navMenu.classList.remove("show-menu");
});
for (let index = 0; index < circle.length; index++) {
  li[index].addEventListener("click", function () {
    for (let h = 0; h < li.length; h++) {
      li[h].classList.remove("active");
    }
    this.classList.add("active");
    let dataFilter = li[index].getAttribute("data-filter");
    bookType.forEach((item,index)=>{
      console.log(item.innerHTML);
      console.log(index);
    })
    for (let k = 0; k < products.length; k++) {
      let box = list.querySelectorAll(".book-card");
      box[k].classList.remove("show");
      box[k].classList.add("hide");
      if (products[k].type == dataFilter || dataFilter == "all") {
        box[k].classList.remove("hide");
        box[k].classList.add("show");
      } else {
        console.log("Error");
      }
    }
  });
}

sun.addEventListener("click", () => {
  body.classList.add("darkLight");
  sun.classList.toggle("hide");
  moon.classList.toggle("hide");
  imageIcons.forEach((image) => {
    image.classList.toggle("hide");
  });
});
moon.addEventListener("click", () => {
  body.classList.remove("darkLight");
  sun.classList.toggle("hide");
  moon.classList.toggle("hide");
  imageIcons.forEach((image) => {
    image.classList.toggle("hide");
  });
});
cart.addEventListener("click", () => {
  body.classList.toggle("active");
});
closeShopping.addEventListener("click", () => {
  body.classList.remove("active");
});
window.onscroll = () => {
  body.classList.remove("active");
};
let img = homeBg.querySelectorAll("img");
img.forEach((item, index) => {
  item.style.left = `${index * 100}%`;
});
let counter = 0;
rightArrow.addEventListener("click", () => {
  if (counter == img.length - 1) {
    counter = 0;
    slideImage();
  } else {
    counter++;
    slideImage();
  }
});
leftArrow.addEventListener("click", () => {
  if (counter == 0) {
    counter = img.length - 1;
    slideImage();
  } else {
    counter--;
    slideImage();
  }
});
const slideImage = () => {
  img.forEach((slide) => {
    slide.style.transform = `translateX(-${counter * 100}%)`;
  });
};

function addToCard(key) {
  if (listCards[key] == null) {
    listCards[key] = JSON.parse(JSON.stringify(products[key]));
    listCards[key].quanity = 1;
  }
  reloadCard();
}
function reloadCard() {
  listCard.innerHTML = "";
  let count = 0;
  let totalPrice = 0;
  listCards.forEach((value, key) => {
    totalPrice = totalPrice + value.price;
    count = count + value.quanity;
    if (value != null) {
      let newDiv = document.createElement("li");
      newDiv.innerHTML = `
      <div><img src="${value.image}"></div>
      <div>${value.title}</div>
      <div>$ ${value.price.toLocaleString()}</div>
      <div>
      <button onclick="changeQuanity(${key},${value.quanity - 1})">-</button>
      <div class="count">${value.quanity}</div>
      <button onclick="changeQuanity(${key},${value.quanity + 1})">+</button>
      </div>`;
      listCard.appendChild(newDiv);
    }
  });
  total.innerText = `$ ${totalPrice.toLocaleString()}`;
  quanity.innerText = count;
}
function changeQuanity(key, quantity) {
  if (quantity == 0) {
    delete listCards[key];
  } else {
    listCards[key].quanity = quantity;
    listCards[key].price = quantity * products[key].price;
  }
  reloadCard();
}
let bookCards = document.querySelectorAll(".book-card");
let inOption = document.querySelectorAll(".inOption");
function option(key) {
  inOption[key].classList.toggle("show");
}
let bookTitle = document.querySelectorAll(".book-title");

let bookPrice = document.querySelectorAll(".book-price");
let bookImagish = document.querySelectorAll(".book-imagish");
let bookAuthor = document.querySelectorAll(".book-author");
let mySearch = document.querySelector("#mySearch");
let searchBtn = document.querySelector("#searchBtn");
let popCardClose = document.querySelector("#popCardClose");
let popCard = document.querySelector(".popCard");
let popImage = document.querySelector("#popImage"),
  popTitle = document.querySelector(".popTitle"),
  popType = document.querySelector(".popType"),
  popAuthor = document.querySelector(".popAuthor"),
  popPrice = document.querySelector(".popPrice"),
  popImagish = document.querySelector(".popImagish");
let num;
let x = 0;
function renameItem(key) {
  num = key;
  popCard.classList.add("popActive");
  let imageSrc = bookImagish[key].src;
  popImagish.src = imageSrc;
  popType.value = bookType[key].innerHTML;
  popTitle.value = bookTitle[key].innerHTML;
  popAuthor.value = bookAuthor[key].innerHTML;
  popPrice.value = products[key].price;
  popImage.onchange = function () {
    popImagish.src = URL.createObjectURL(popImage.files[0]);
    x = 1;
  };
  popCardClose.addEventListener("click", () => {
    popCard.classList.remove("popActive");
  });
}
function popCardSave() {
  if (
    popTitle.value != "" &&
    popType.value != "" &&
    popAuthor.value != "" &&
    popPrice.value != ""
  ) {
    let popTitleValue = popTitle.value,
      popTypeValue = popType.value.toLowerCase(),
      popAuthorValue = popAuthor.value,
      popPriceValue = popPrice.value;
    if (x == 1) {
      bookImagish[num].src = URL.createObjectURL(popImage.files[0]);
    }
    products[num].type = popTypeValue;
    bookType[num].innerHTML = popTypeValue;
    bookTitle[num].innerHTML = popTitleValue;
    bookPrice[num].innerHTML = `$${popPriceValue}`;
    bookAuthor[num].innerHTML = popAuthorValue;

    popCard.classList.remove("popActive");
  } else {
    alert("To'ldir");
  }
}
function removeItem(l) {
  l.parentElement.parentElement.parentElement.parentElement.remove();
}

mySearch.placeholder = "Search by Title...";
searchBtn.addEventListener("click", () => {
  mySearch.value = "";
  if (mySearch.placeholder == "Search by Type...") {
    mySearch.placeholder = "Search by Title...";
    let input = mySearch.value.toUpperCase();
    bookTitle.forEach((item, index) => {
      if (item.innerHTML.toUpperCase().indexOf(input) > -1) {
        bookCards[index].style.display = "flex";
      } else {
        bookCards[index].style.display = "none";
      }
    });
  } else {
    mySearch.placeholder = "Search by Type...";
    let input = mySearch.value.toUpperCase();
    bookType.forEach((item, index) => {
      if (item.innerHTML.toUpperCase().indexOf(input) > -1) {
        bookCards[index].style.display = "flex";
      } else {
        bookCards[index].style.display = "none";
      }
    });
  }
});
mySearch.addEventListener("keyup", () => {
  let input = mySearch.value.toUpperCase();
  if (mySearch.placeholder == "Search by Title...") {
    bookTitle.forEach((item, index) => {
      if (item.innerHTML.toUpperCase().indexOf(input) > -1) {
        bookCards[index].style.display = "flex";
      } else {
        bookCards[index].style.display = "none";
      }
    });
  } else {
    bookType.forEach((item, index) => {
      if (item.innerHTML.toUpperCase().indexOf(input) > -1) {
        bookCards[index].style.display = "flex";
      } else {
        bookCards[index].style.display = "none";
      }
    });
  }
});
