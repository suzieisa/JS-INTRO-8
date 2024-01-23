
import { MathHelper } from "./mathHelper.js";


/* Generate 3 random numbers bt 1 & 10.
Find their sum and product
*/

const r1 = MathHelper.getRandomNumber(1, 10);
const r2 = MathHelper.getRandomNumber(1, 10);
const r3 = MathHelper.getRandomNumber(1, 10);

console.log(r1, r2, r3);

console.log(MathHelper.sum(r1,r2,r3));
console.log(MathHelper.product(r1,r2,r3));