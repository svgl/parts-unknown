// Coffee: price_1LnUTFDM1jwCEz8OGoOSXiSM
// Sunglasses: price_1LnUTxDM1jwCEz8OAqHYTwKQ
// Camera: price_1LnUUoDM1jwCEz8OvxIcJ7to

const productsArray = [
  {
    id: "price_1MM58uJuldpwwOaBeJm5QWbY",
    title: "Australia",
    image: "https://i.imgur.com/GlLNu4K.png",
    price: 24.99,
  },
  {
    id: "price_1MM59NJuldpwwOaBcPDS7Gci",
    title: "Austria",
    image: "https://i.imgur.com/5vSt0Ma.png",
    price: 22.99,
  },
  {
    id: "price_1MM59jJuldpwwOaBlTPfB6EP",
    title: "Bangladesh",
    image: "https://i.imgur.com/aiK450Y.png",
    price: 21.99,
  },
  {
    id: "price_1MM5A7JuldpwwOaBzU06K1jE",
    title: "Belize",
    image: "https://i.imgur.com/PowhsDN.png",
    price: 19.99,
  },
  {
    id: "price_1MM5ATJuldpwwOaB5x0BpPUA",
    title: "Bhutan",
    image: "https://i.imgur.com/UcmYh5M.png",
    price: 19.99,
  },
  {
    id: "price_1MM5AiJuldpwwOaBqzBiL0G5",
    title: "Bolivia",
    image: "https://i.imgur.com/nW87c6g.png",
    price: 19.99,
  },
  {
    id: "price_1MM5BAJuldpwwOaBHGbbKZpy",
    title: "Brazil",
    image: "https://i.imgur.com/Q1eLaE4.png",
    price: 22.99,
  },
  {
    id: "price_1MM5BOJuldpwwOaBdCstdVkH",
    title: "Cambodia",
    image: "https://i.imgur.com/crQf9DW.png",
    price: 19.99,
  },
  {
    id: "price_1MM5BfJuldpwwOaBPPiMiRqO",
    title: "Canada",
    image: "https://i.imgur.com/MuXUQ94.png",
    price: 23.99,
  },
  {
    id: "price_1MM5BsJuldpwwOaBzDlB8uej",
    title: "Chile",
    image: "https://i.imgur.com/QsgB5gS.png",
    price: 22.99,
  },
  {
    id: "price_1MM5C6JuldpwwOaBskGXUm9P",
    title: "China",
    image: "https://i.imgur.com/8IJoQEX.png",
    price: 19.99,
  },
  {
    id: "price_1MM5CMJuldpwwOaBf7qwMGbf",
    title: "Cuba",
    image: "https://i.imgur.com/j0wCqXc.png",
    price: 19.99,
  },
  {
    id: "price_1MM5CuJuldpwwOaBVwM4TnRc",
    title: "Cyprus",
    image: "https://i.imgur.com/TyvUp5Q.png",
    price: 17.99,
  },
  {
    id: "price_1MM5DMJuldpwwOaBONFO4B8T",
    title: "Czech Republic",
    image: "https://i.imgur.com/jnvCtR4.png",
    price: 19.99,
  },
  {
    id: "price_1MM5DaJuldpwwOaBqry6KdLB",
    title: "Denmark",
    image: "https://i.imgur.com/E4oSawN.png",
    price: 22.99,
  },
  {
    id: "price_1MM5DwJuldpwwOaBzZioSNWW",
    title: "Dominican Republic",
    image: "https://i.imgur.com/4KMD2JC.png",
    price: 19.99,
  },
  {
    id: "price_1MM5EGJuldpwwOaBl2Qa8dPT",
    title: "Egypt",
    image: "https://i.imgur.com/ymksgsy.png",
    price: 22.99,
  },
  {
    id: "price_1MM5EVJuldpwwOaBdz3XEYDw",
    title: "Fiji",
    image: "https://i.imgur.com/Qv4hbt4.png",
    price: 19.99,
  },
  {
    id: "price_1MM5ElJuldpwwOaB7UejzpUx",
    title: "Finland",
    image: "https://i.imgur.com/Z3LbkVw.png",
    price: 22.99,
  },
  {
    id: "price_1MM5EwJuldpwwOaBNxOwof7s",
    title: "Germany",
    image: "https://i.imgur.com/2df8cjK.png",
    price: 24.99,
  },
  {
    id: "price_1MM5FFJuldpwwOaBfQhz6C6k",
    title: "Great Britain",
    image: "https://i.imgur.com/jJCfzit.png",
    price: 23.99,
  },
  {
    id: "price_1MM5FSJuldpwwOaBuoQctkzs",
    title: "Guatemala",
    image: "https://i.imgur.com/zfeGUl0.png",
    price: 19.99,
  },
  {
    id: "price_1MM5FhJuldpwwOaBpX55tXkb",
    title: "Hungary",
    image: "https://i.imgur.com/iPcfwd7.png",
    price: 21.99,
  },
  {
    id: "price_1MM5G1JuldpwwOaBzy60wH9X",
    title: "India",
    image: "https://i.imgur.com/SrVaYSQ.png",
    price: 23.99,
  },
  {
    id: "price_1MM5GKJuldpwwOaBJFvFjmSU",
    title: "Indonesia",
    image: "https://i.imgur.com/ISZIB54.png",
    price: 24.99,
  },
  {
    id: "price_1MM5GaJuldpwwOaBNY09ynFW",
    title: "Iran",
    image: "https://i.imgur.com/FRP6qxe.png",
    price: 16.99,
  },
  {
    id: "price_1MM5GrJuldpwwOaBF2tHpO18",
    title: "Jamaica",
    image: "https://i.imgur.com/1y2PIRg.png",
    price: 19.99,
  },
  {
    id: "price_1MM5H3JuldpwwOaBBAB8gnHQ",
    title: "Jordan",
    image: "https://i.imgur.com/mVWW8ko.png",
    price: 21.99,
  },
  {
    id: "price_1MM5HGJuldpwwOaBWDsB5Kei",
    title: "Kenya",
    image: "https://i.imgur.com/2luMAQW.png",
    price: 19.99,
  },
  {
    id: "price_1MM5HRJuldpwwOaBNfi5Edf7",
    title: "Laos",
    image: "https://i.imgur.com/ThQv4Ym.png",
    price: 19.99,
  },
  {
    id: "price_1MM5HfJuldpwwOaBXEJXSo3G",
    title: "Madagascar",
    image: "https://i.imgur.com/LToupr2.png",
    price: 18.99,
  },
  {
    id: "price_1MM5HrJuldpwwOaBpLr7xwC8",
    title: "Maldives",
    image: "https://i.imgur.com/m8HA4w7.png",
    price: 19.99,
  },
  {
    id: "price_1MM5I2JuldpwwOaBb8VXeQ9i",
    title: "Mongolia",
    image: "https://i.imgur.com/VvkSMxk.png",
    price: 17.99,
  },
  {
    id: "price_1MM5IHJuldpwwOaBlZocDCit",
    title: "Montenegro",
    image: "https://i.imgur.com/Dhmkc7E.png",
    price: 16.99,
  },
  {
    id: "price_1MM5IVJuldpwwOaBXTblzjfp",
    title: "Myanmar",
    image: "https://i.imgur.com/cJYeYqa.png",
    price: 19.99,
  },
  {
    id: "price_1MM5IjJuldpwwOaBpmjg44Gm",
    title: "Nepal",
    image: "https://i.imgur.com/3bPWYRS.png",
    price: 21.99,
  },
  {
    id: "price_1MM5IwJuldpwwOaBfrHGnbtk",
    title: "Netherlands",
    image: "https://i.imgur.com/HfMsLIG.png",
    price: 23.99,
  },
  {
    id: "price_1MM5J7JuldpwwOaBYhSbyHi7",
    title: "Nicaragua",
    image: "https://i.imgur.com/NQnZAoE.png",
    price: 19.99,
  },
  {
    id: "price_1MM5JLJuldpwwOaBhuwFAsPq",
    title: "Panama",
    image: "https://i.imgur.com/ZAh9Zlj.png",
    price: 19.99,
  },
  {
    id: "price_1MM5JaJuldpwwOaBp7E6ymRf",
    title: "Philippines",
    image: "https://i.imgur.com/Xgt8WCU.png",
    price: 21.99,
  },
  {
    id: "price_1MM5JkJuldpwwOaBhTDhnTG8",
    title: "Poland",
    image: "https://i.imgur.com/RPTDKBy.png",
    price: 21.99,
  },
  {
    id: "price_1MM5K1JuldpwwOaBzsyPJr1o",
    title: "Portugal",
    image: "https://i.imgur.com/Po5rsZC.png",
    price: 19.99,
  },
  {
    id: "price_1MM5LGJuldpwwOaBveRpfdcw",
    title: "Russia",
    image: "https://i.imgur.com/r6DRE2O.png",
    price: 19.99,
  },
  {
    id: "price_1MM5LQJuldpwwOaBZ6ZzbF1k",
    title: "Slovenia",
    image: "https://i.imgur.com/9Xk3O2v.png",
    price: 17.99,
  },
  {
    id: "price_1MM5MNJuldpwwOaB5PLC3eMn",
    title: "Sri Lanka",
    image: "https://i.imgur.com/n2UqhtS.png",
    price: 18.99,
  },
  {
    id: "price_1MM5MiJuldpwwOaBhWqhKJrD",
    title: "Sweden",
    image: "https://i.imgur.com/4jHRQbu.png",
    price: 21.99,
  },
  {
    id: "price_1MM5N0JuldpwwOaBIHFfQdFo",
    title: "Switzerland",
    image: "https://i.imgur.com/E5T33SA.png",
    price: 22.99,
  },
  {
    id: "price_1MM5NGJuldpwwOaBNpnhnDen",
    title: "Tanzania",
    image: "https://i.imgur.com/kC1lARZ.png",
    price: 18.99,
  },
  {
    id: "price_1MM5NRJuldpwwOaBFfQ7Eau5",
    title: "Ukraine",
    image: "https://i.imgur.com/EJAUbs2.png",
    price: 18.99,
  },
  {
    id: "price_1MM5NgJuldpwwOaBNGklG6hc",
    title: "USA",
    image: "https://i.imgur.com/hq5LO68.png",
    price: 24.99,
  },
  {
    id: "price_1MM5NrJuldpwwOaBmJGBKUNR",
    title: "Vietnam",
    image: "https://i.imgur.com/wysI0oI.png",
    price: 23.99,
  },
];

function getProductData(id) {
  let productData = productsArray.find((product) => product.id === id);

  if (productData == undefined) {
    console.log("Product data does not exist for ID: " + id);
    return undefined;
  }

  return productData;
}

export { productsArray, getProductData };
