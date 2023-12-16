

const categories = [
    "smartphones",
    "laptops",
    "fragrances",
    "skincare",
    "groceries",
    "home-decoration",
    "furniture",
    "tops",
    "womens-dresses",
    "womens-shoes",
    "mens-shirts",
    "mens-shoes",
    "mens-watches",
    "womens-watches",
    "womens-bags",
    "womens-jewellery",
    "sunglasses",
    "automotive",
    "motorcycle",
    "lighting"
];

const turkishTranslations = {
    "smartphones": "Akıllı Telefon",
    "laptops": "Laptop",
    "fragrances": "Parfüm",
    "skincare": "Cilt Bakımı",
    "groceries": "Market Alışverişi",
    "home-decoration": "Ev Dekorasyonu",
    "furniture": "Mobilya",
    "tops": "Üst Giyim",
    "womens-dresses": "Kadın Elbiseleri",
    "womens-shoes": "Kadın Ayakkabıları",
    "mens-shirts": "Erkek Gömlekleri",
    "mens-shoes": "Erkek Ayakkabıları",
    "mens-watches": "Erkek Saatleri",
    "womens-watches": "Kadın Saatleri",
    "womens-bags": "Kadın Çantaları",
    "womens-jewellery": "Kadın Takıları",
    "sunglasses": "Güneş Gözlüğü",
    "automotive": "Otomotiv",
    "motorcycle": "Motosiklet",
    "lighting": "Aydınlatma"
};

const menuList = categories.map((category, index) => ({
    name: turkishTranslations[category] || "", // Türkçe çeviri yoksa boş string
    link: category,
    id: index + 1
}));

console.log(menuList);

export default menuList
