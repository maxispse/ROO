import { createApp } from 'https://unpkg.com/vue@3/dist/vue.esm-browser.js'

const count = 0;
const array = [1,2,3,4,5];
const [FirstNumber] = array;
createApp({
    
    methods: {
        increment() {
            this.count += 1;
        },
        decrement() {
            this.count -= 1;
        }
    },
    data() {
        return {
            count,
            array,
            FirstNumber
        }
    },
    template: 
    ` <div>
        <h1>Counter</h1>
        <button @click="decrement">-</button>
        <span>  ~ {{ count }} ~  </span>
        <button @click="increment">+</button>
    </div>
    <div>
        <h1>Array and Destructuring</h1>
        <p>Array: {{ array }}</p>
        <p>First Number (Destructured): {{ FirstNumber }}</p>
    </div> `
}).mount('#app')