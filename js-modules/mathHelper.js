export class MathHelper {
    static pi = 3.14;
    static getRandomNumber = (start, end) => Math.floor(Math.random() * (end - start + 1)) + start;
    static sum = (...args) => {
        return args.reduce((sum, curr) => sum + curr, 0);
    };
    static product = (...args) => {
        return args.reduce((result, curr) => result * curr, 1);
    }
}