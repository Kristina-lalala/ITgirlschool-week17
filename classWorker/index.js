class Worker {
    constructor(name, surname, rate, days) {
        this.name = name;
        this.surname = surname;
        this.rate = rate;
        this.days = days;
    }

    getSalary() {
        return this.rate * this.days;
    }
}

let worker = new Worker('Иван', 'Иванов', 10, 31);

console.log(worker.name);
console.log(worker.surname);
console.log(worker.rate);
console.log(worker.days);
console.log(worker.getSalary());

// let kristina = new Worker('Кристина', 'Гетманская', 500, 22);
// console.log(kristina.name);
// console.log(kristina.surname);
// console.log(kristina.rate);
// console.log(kristina.days);
// console.log(kristina.getSalary());