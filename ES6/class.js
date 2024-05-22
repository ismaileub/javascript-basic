const products = [
    { id: 1, name: 'lenovo', price: 65000 },
    { id: 2, name: 'dell', price: 45000 },
    { id: 3, name: 'macbook', price: 165000 },
    { id: 4, name: 'hp', price: 40000 }
]

class Products {
    country = 'Bangladesh';
    constructor(name) {
        this.name;
    }
    speak(talk) {
        console.log(`Sir is talking about ${talk}`);

    }
}

const lenovo = new Products('Le le lenovo');
//console.log(lenovo);


class Teacher {
    constructor(name, subject) {
        this.name = name;
        this.subject = subject;
    }
    lecture() {
        console.log('Sir is teaching math');
    }
}

const tapon = new Teacher('Tapon sir', 'Physics');
console.log(tapon);

const harun = new Teacher('Harun sir', 'CSE');
console.log(harun);