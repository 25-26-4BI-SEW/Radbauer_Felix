class Complex {
    #imaginary;
    #real;

    constructor(real, imaginary) {
        if (!real && !imaginary) {
            this.#real = 0;
            this.#imaginary = 0;
        } else if (!real || !imaginary) {
            this.#real = real;
        }
        if (imaginary && real) {
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
}