class Product {
    constructor(title, imageUrl, description, price) {
        this.title = title;
        this.imageUrl = imageUrl;
        this.description = description;
        this.price = price;
    }
}

class ShoppingCart {
    item = [];

    render() {
        const cartEl = document.createElement('section');
        cartEl.innerHTML = `
            <h2>Total: \$${0}</h2>
            <button>Order Now!</button>
        `;
        cartEl.className = 'cart';
        return cartEl;
    }
}

class ProductItem {
    constructor(product) {
        this.product = product;
    }

    addToCart() {
        console.log(this.product)
    }

    render() {
        const prodEl = document.createElement('li');
        prodEl.className = 'product-item';
        prodEl.innerHTML = `
            <div>
                <img src="${this.product.imageUrl}" alt="${this.product.title}">
                <div class='product-item__content'>
                    <h2>${this.product.title}</h2>
                    <h3>\$${this.product.price}</h3>
                    <p>${this.product.description}</p>
                    <button>Add to Cart</button>
                 </div>
            </div>
        `;
        const addCartButton = prodEl.querySelector('button');
        addCartButton.addEventListener('click', this.addToCart.bind(this))
        return prodEl;
    }
}


class ProductList {
    products = [
        new Product(
            'Антуриумы',
            'https://rasteniya.dp.ua/img/structure/max/35.jpg',
            'Антуриумы (лат. anthurium) - вечнозеленые многолетние полуэпифитные цветущие комнатные растения. Антуриумы еще называют огненным языком, цветком фламинго или мужское счастье.',
            19.99
        ),
        new Product(
            'Бегонии декоративнолистные',
            'https://rasteniya.dp.ua/img/structure/max/21.jpg',
            'Бегонии декоративнолитные (лат. begonia) - кустистые комнатные растения с мясистыми стеблями или с гибкими, свисающими черешками.',
             29.99
        )
    ];

    constructor() {}

    render() {
        const prodList = document.createElement('ul');
        prodList.className = 'product-list';
        for (const prod of this.products) {
            const productItem = new ProductItem(prod);
            const prodEl = productItem.render();
            prodList.append(prodEl)
        }
        return prodList;
    }
}

class Shop {
    render() {
        const renderHook = document.getElementById('app');
        const cart = new ShoppingCart();
        const cartEl = cart.render();
        const productList = new ProductList();
        const prodListEl = productList.render();

        renderHook.append(cartEl);
        renderHook.append(prodListEl)
    }
}

const shop = new Shop();
shop.render();
