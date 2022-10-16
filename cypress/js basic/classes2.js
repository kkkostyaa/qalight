class parent {
    constructor(name, age) {
        this.name = name;
        this.age = age;
        this.lastname = 'Konovalov';
    }
    tellName() {
        console.log('My name is ' + this.name + ' ' + this.lastname)
    }

    tellAge() {
        console.log(`My age is ${this.age}`);
    }

    tellJobTitle() {
        if (this instanceof child) {
            console.log(' i dont work ')
        } else {
            this.job = 'QA';
            console.log('My job is ' + this.job);
        }
    }

}


class child extends parent {
    goToSchool() {
        console.log('i like to go to school');
    }
}

const par = new parent('Kostya', 34);
const chi = new child('sofia', 5);
//console.log(par);
//console.log(chi)
par.tellName();
par.tellAge();

chi.tellName();
chi.tellAge();
chi.tellJobTitle();