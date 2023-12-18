import { turkishTranslations } from "@/constant/turkishTranslate"

export const convertCategories = (products) => {
    // Kategorilere ait stokları toplamak için bir obje oluştur,

    if (products) {
        const categoryStocks = {};

        // Her ürünü dolaş
        products.forEach(product => {
            const category = product.category;

            // Eğer kategori daha önce eklenmemişse, objeye ekle
            if (!categoryStocks[category]) {
                categoryStocks[category] = 0;
            }

            // Kategoriye ait stoku topla
            categoryStocks[category] += product.stock;
        });

        // Sonuçları bir diziye dönüştür
        const result = Object.keys(categoryStocks).map(category => ({
            category: category,
            name: turkishTranslations[category] || category,
            stock: categoryStocks[category]
        }));
        return result;
    }

}


