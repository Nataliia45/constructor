function Person(name, age) {
    if (!name) {
        throw new Error("Имя не может быть пустым");
    }
    if (age <= 18) {
        throw new Error("Возраст должен быть больше 18 лет");
    }
    this.name = name;
    this.age = age;
}

Person.prototype.displayInfo = function() {
    console.log(`Имя: ${this.name}, Возраст: ${this.age}`);
}

function Car(make, model, year) {
    if (!make || !model || !year) {
        throw new Error("Все поля автомобиля должны быть заполнены");
    }
    this.make = make;
    this.model = model;
    this.year = year;
    this.owner = null;
}

Car.prototype.displayInfo = function() {
    console.log(`Марка: ${this.make}, Модель: ${this.model}, Год выпуска: ${this.year}`);
    if (this.owner) {
        console.log(`Владелец: ${this.owner.name}, Возраст владельца: ${this.owner.age}`);
    } else {
        console.log("Владелец не назначен");
    }
}

Car.prototype.setOwner = function(owner) {
    if (!(owner instanceof Person)) {
        throw new Error("Владелец должен быть экземпляром класса Person");
    }
    this.owner = owner;
}

function getInput(promptMessage) {
    const input = prompt(promptMessage);
    if (input === null || input.trim() === "") {
        throw new Error("Поле не может быть пустым");
    }
    return input.trim();
}

try {
    const personName = getInput("Введите имя владельца:");
    const personAge = parseInt(getInput("Введите возраст владельца:"), 10);

    const owner = new Person(personName, personAge);

    const carMake = getInput("Введите марку автомобиля:");
    const carModel = getInput("Введите модель автомобиля:");
    const carYear = parseInt(getInput("Введите год выпуска автомобиля:"), 10);

    const car = new Car(carMake, carModel, carYear);
    car.setOwner(owner);

    console.log("Данные о владельце:");
    owner.displayInfo();

    console.log("Данные об автомобиле:");
    car.displayInfo();

} catch (error) {
    console.error("Ошибка:", error.message);
}
