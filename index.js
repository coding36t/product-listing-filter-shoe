const shoes = [
    {
        id: 1,
        brand: "Nike",
        name: "Air Max Plus",
        category: "sneakers",
        price: 190.0,
        instock: true,
        color: ["black", "red"],
        size: [40, 41, 42, 43, 44],
        img: "assits/card.jpg"
    },
    {
        id: 2,
        brand: "Nike",
        name: "Air Max 90",
        category: "running",
        price: 130.0,
        instock: true,
        color: ["white", "black", "red"],
        size: [40, 42, 43],
        img: "assits/card.jpg"
    },
    {
        id: 3,
        brand: "Nike",
        name: "Air Force 1",
        category: "casual",
        price: 115.0,
        instock: false,
        color: ["green", "black"],
        size: [41, 42],
        img: "assits/card.jpg"
    },
    {
        id: 4,
        brand: "Adidas",
        name: "Ultraboost 5",
        category: "running",
        price: 180.0,
        instock: true,
        color: ["black", "white", "red"],
        size: [42, 43, 44, 45],
        img: "assits/card.jpg"
    },
    {
        id: 5,
        brand: "Adidas",
        name: "Superstar",
        category: "sneakers",
        price: 100.0,
        instock: true,
        color: ["white", "black"],
        size: [39, 40, 41, 42, 43],
        img: "assits/card.jpg"
    },
    {
        id: 6,
        brand: "Adidas",
        name: "Stan Smith",
        category: "casual",
        price: 90.0,
        instock: false,
        color: ["white", "green"],
        size: [40, 41, 42, 43],
        img: "assits/card.jpg"
    },
    {
        id: 7,
        brand: "Vans",
        name: "Old Skool",
        category: "skateboarding",
        price: 75.0,
        instock: true,
        color: ["black", "white"],
        size: [39, 40, 41, 42, 43],
        img: "assits/card.jpg"
    },
    {
        id: 8,
        brand: "Vans",
        name: "Slip-On",
        category: "casual",
        price: 65.0,
        instock: true,
        color: ["black", "white", "red"],
        size: [40, 41, 42, 43],
img: "assits/card.jpg",    },
    {
        id: 9,
        brand: "Vans",
        name: "Sk8-Hi",
        category: "high-top",
        price: 85.0,
        instock: false,
        color: ["black", "blue"],
        size: [40, 41, 42, 43, 44],
img: "assits/card.jpg",    },
    {
        id: 10,
        brand: "Nike",
        name: "Dunk Low",
        category: "sneakers",
        price: 120.0,
        instock: true,
        color: ["white", "green", "blue"],
        size: [40, 41, 42, 43, 44],
        img: "assits/card.jpg",
    }
];


const showRow = document.getElementById("show-rows");

const renderShoes = (shoesToShow) => {
  showRow.innerHTML = "";

  shoesToShow.forEach((shoe) => {
    const shoeHTML = `
    <div class="col">
        <div class="card h-100">
            <img src="${shoe.img}" class="card-img-top img-fluid"
                 alt="${shoe.name}">
            <div class="card-body">
                <h5 class="card-title">${shoe.name}</h5>
                <p class="card-text">${shoe.brand}</p>
                <p class="card-text">$${shoe.price}</p>
                <p class="card-text">Color: ${shoe.color.join(", ")}</p>
            </div>
        </div>
    </div>`;    
    showRow.innerHTML += shoeHTML;
  });
};



const filter = {
    brand: "",
    color: "",
    size: "",
    price: "180"
};



const filterShoes = (event) => {
    filter[event.target.name] = event.target.value;

    // Price slider ki values update karein
    if (event.target.name === "price") {
        document.getElementById("priceValue").innerText =
            event.target.value;

        document.getElementById("priceLabel").innerText =
            event.target.value;
    }

    const filteredShoes = shoes.filter((shoe) => {
        const brand =
            filter.brand === "" || shoe.brand === filter.brand;

        const color =
            filter.color === "" ||
            shoe.color.includes(filter.color);

        const size =
            filter.size === "" ||
            shoe.size.includes(Number(filter.size));

        const price =
            shoe.price <= Number(filter.price);

        return brand && color && size && price;
    });

    renderShoes(filteredShoes);
};

renderShoes(shoes);





const searchShoes = () => {
    const searchValue = document
        .getElementById("searchInput")
        .value.trim().toLowerCase();

    const filteredShoes = shoes.filter((shoe) => {
        const brand = shoe.brand.toLowerCase().includes(searchValue);
        const name = shoe.name.toLowerCase().includes(searchValue);
        const price = shoe.price.toString().includes(searchValue);
        const size = shoe.size.some((s) =>
            s.toString().includes(searchValue)
        );
        const color = shoe.color.some((c) =>
            c.toLowerCase().includes(searchValue)
        );

        return brand || name || price || size || color;
    });

    renderShoes(filteredShoes);
};

