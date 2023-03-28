import { config } from 'dotenv'
config();

/*
console.log(
    process.env.PORT,
    process.env.USER,
)
*/


export default {
    port: process.env.PORT || 3000
}