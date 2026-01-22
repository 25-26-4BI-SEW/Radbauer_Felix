class Complex {
    #imaginary;
    #real;

    constructor(real=0, imaginary=0) {
        if (real instanceof Complex) {
            this.#real = real.real;
            this.#imaginary = real.imaginary;
        }
        else if (typeof imaginary === 'number' && typeof real === 'number') {
            this.#real = real;
            this.#imaginary = imaginary;
        }
    }


    get real() {
        return this.#real;
    }

    get imaginary() {
        return this.#imaginary;
    }

    add(realOrComplex, imaginary) {
        // If no arguments, return without changes
        if (realOrComplex === undefined && imaginary === undefined) {
            return this;
        }

        // Handle adding a single number
        if (typeof realOrComplex === 'number' && imaginary === undefined) {
            this.#real += realOrComplex;
            return this;
        }

        // Handle adding a Complex number
        if (realOrComplex instanceof Complex) {
            this.#real += realOrComplex.real;
            this.#imaginary += realOrComplex.imaginary;
            return this;
        }

        // Handle adding real and imaginary parts
        if (typeof realOrComplex === 'number' && typeof imaginary === 'number') {
            this.#real += realOrComplex;
            this.#imaginary += imaginary;
            return this;
        }

        // Handle string numbers
        if (String(realOrComplex).match(/^-?\d+$/) && imaginary === undefined) {
            this.#real += Number(realOrComplex);
            return this;
        }

        return this;
    }

    toString() {
        if (this.#imaginary >= 0) {
            return `${this.#real} + ${this.#imaginary}i`;
        } else {
            return `${this.#real} - ${Math.abs(this.#imaginary)}i`;
        }
    }

    static equals = (c1, c2) => 
        c1.real === c2.real && 
        c1.imaginary === c2.imaginary;
}

const c1 = new Complex(2, 3);
const c2 = new Complex(1, -1);
console.log("c1 starting: ", c1.toString());
console.log("c2 starting: ", c2.toString());
c1.add(c2);
console.log("c1 + c2:", c1.toString());
c2.add(c2);
console.log(c1.toString());
console.log("c2:", c2.toString());

const c3 = new Complex();
console.log("c3: ", c3.toString());
const c4 = new Complex();
console.log("c4: ", c4.toString());
console.log("c3 == c4:", Complex.equals(c3, c4));
c4.add(12, 4);
console.log("c4: ", c4.toString());
c4.add(c1);
console.log("c4: ", c4.toString());

console.log(c4.imaginary);

const c5 = new Complex(new Complex(5, 3));
console.log("c5: ", c5.toString());

const c6 = new Complex(5);
console.log("c6: ", c6.toString());