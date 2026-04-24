import "./scss/styles.scss";
import { Products } from "./components/products";
import { Basket } from "./components/basket";
import { Buyer } from "./components/buyer";
import { apiProducts } from "./utils/data";
import { ApiService } from "./components/apiService";
import { Api } from "./components/base/Api";
import { API_URL } from "./utils/constants";

const products = new Products();
const basket = new Basket();
const buyer = new Buyer();
const api = new Api(API_URL);
const apiService = new ApiService(api);

// Тесты для Products

// Получение каталога товаров
products.setItems(apiProducts.items);
console.log("Каталог товаров:", products.getItems());

// Поиск товара по id
console.log(
  "Поиск товара по id:",
  products.getProductById(products.getItems()[0].id),
);

// Тесты для Basket

// Добавление в корзину
basket.addItem(products.getItems()[0]);
console.log("Корзина после добавления товара:", basket.getItems());

// Удаление из корзины
basket.removeItem(products.getItems()[0].id);
console.log("Корзина после удаления товара:", basket.getItems());

// Очистка корзины
basket.addItem(products.getItems()[0]);
console.log("Корзина перед очисткой:", basket.getItems());
basket.clear();
console.log("Корзина после очистки:", basket.getItems());

// Подсчет суумы и количества товаров
basket.addItem(products.getItems()[0]);
basket.addItem(products.getItems()[1]);
console.log("Корзина перед подсчётом суммы:", basket.getItems());
console.log("Сумма корзины:", basket.getTotal());
console.log("Количество товаров в корзине:", basket.getCount());
console.log(
  "Есть ли товар в корзине:",
  basket.hasItem(products.getItems()[0].id),
);
basket.clear();

// Тесты для Buyer

// Сохранение данных покупателя
buyer.saveData({
  email: "test@mail.com",
  phone: "123456789",
  address: "Test street 1",
});

console.log("Данные покупателя:", buyer.getData());

// Валидация данных
console.log("Ошибки валидации:", buyer.validate());

// Очистка данных о покупателе
buyer.clear();
console.log("Данные покупателя после очистки:", buyer.getData());

// Работа с сервером - получение каталога и вывод в консоль
apiService.getProducts().then((data) => {
  products.setItems(data.items);
  console.log("Каталог товаров с сервера:", products.getItems());
});
