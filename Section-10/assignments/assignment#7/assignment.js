class Course {

    #price;

    constructor(courseTitle, courseLength, coursePrice) {
        this.title = courseTitle;
        this.length = courseLength;
        this.price = coursePrice;
    }

    get price() {
        return '$' + this._price;
    }

    set price(value) {
        if (value < 0) {
            throw 'Invalid value';
        }
        this.#price = value;
    }

    lenPerPrice() {
        return this.length/this.#price;
    }

    summary() {
        console.log('Course: ', this.title);
        console.log('Length: ', this.length);
        console.log('Price: ', this.price);
        console.log(`Summary: ${this.title} complete course!`);
    }
}

const course1 = new Course('Javascript', 50, 25);
console.log(course1);
console.log(course1.lenPerPrice());
console.log(course1.summary());

const course2 = new Course('React', 40, 30);
console.log(course2);
console.log(course2.lenPerPrice());
console.log(course2.summary());

class PracticalCourse extends Course {
    constructor(title, length, price, numOfExercises){
        super(title, length, price);
        this.numOfExercises = numOfExercises;
    }

    summary() {
        console.log('Course: ', this.title);
        console.log('Length: ', this.length);
        console.log('Price: ', this.price);
        console.log('Number of Exercises: ', this.numOfExercises);
        console.log(`Summary: ${this.title} complete course!`);
    }
}

class TheoreticalCourse extends Course {
    publish() {
        console.log(`The ${this.title} course is a theoretical course. For a practical course, buy another one!!`);
    }
}

const course3 = new PracticalCourse('Django', 36, 22, 100);
console.log(course3.summary());

const course4 = new TheoreticalCourse('3D', 100, 600);
console.log(course4.summary());
console.log(course4.publish());

