class Transport {
    constructor(type, price, brand) {
        this.type = type;
        this.price = price;
        this.brand = brand;
    }

    getInfo() {
        return `Type: ${this.type}, Brand: ${this.brand}`;
    }

    getPrice() {
        return `Price: ${this.price}`;
    }
}

class Car extends Transport {
    constructor(type, price, brand, doors) {
        super(type, price, brand);
        this.doors = doors;
    }

    getDoorsCount() {
        return `Doors count: ${this.doors}`;
    }
}

class Bike extends Transport {
    constructor(type, price, brand, maxSpeed) {
        super(type, price, brand);
        this.maxSpeed = maxSpeed;
    }

    getMaxSpeed() {
        return `Max speed: ${this.maxSpeed}`;
    }
}

const data = [
    {
        id: 1,
        type: 'car',
        brand: 'Audi',
        doors: 4,
        price: 4300000,
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/2020_Audi_e-Tron_Sport_50_Quattro.jpg/1200px-2020_Audi_e-Tron_Sport_50_Quattro.jpg'
    },
    {
        id: 2,
        type: 'car',
        brand: 'Mercedes-Benz',
        doors: 4,
        price: 2800000,
        image: 'https://www.mercedes-benz-mena.com/en/passengercars/mercedes-benz-cars/models/e-class/sedan-w213-fl/explore/_jcr_content/notificationboxes/notificationbox/image.MQ6.12.20211013084329.jpeg'
    },
    {
        id: 3,
        type: 'bike',
        brand: 'Harley-Davidson',
        maxSpeed: 210,
        price: 1300000,
        image: 'https://www.harley-davidson.com/content/dam/h-d/images/product-images/bikes/motorcycle/2022/2022-iron-883/2022-iron-883-016/2022-iron-883-016-motorcycle.jpg'
    },
    {
        id: 4,
        type: 'bike',
        brand: 'Harley-Davidson',
        maxSpeed: 220,
        price: 1400000,
        image: 'https://cdn.dealerspike.com/imglib/products/harley-showroom/2020/livewire/main/Vivid-Black-Main.png'
    }
];


const car1 = new Car(data[0].type, data[0].price, data[0].brand, data[0].doors);
const car2 = new Car(data[1].type, data[1].price, data[1].brand, data[1].doors);
const bike1 = new Bike(data[2].type, data[2].price, data[2].brand, data[2].maxSpeed);
const bike2 = new Bike(data[3].type, data[3].price, data[3].brand, data[3].maxSpeed);


console.log(car1.getInfo());
console.log(car1.getPrice());
console.log(car1.getDoorsCount());

console.log(car2.getInfo());
console.log(car2.getPrice());
console.log(car2.getDoorsCount());

console.log(bike1.getInfo());
console.log(bike1.getPrice());
console.log(bike1.getMaxSpeed());

console.log(bike2.getInfo());
console.log(bike2.getPrice());
console.log(bike2.getMaxSpeed());