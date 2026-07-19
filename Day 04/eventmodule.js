import { EventEmitter } from 'node:events';

class MyEmitter extends EventEmitter { }

const myEmitter = new MyEmitter();
myEmitter.on('waterFull', () => {
    console.log('Turn off the motor the water is full');
    setTimeout(() => {
        console.log('Its a gentle reminder that you should turn off the motor');
    }, 3000);
});
myEmitter.emit('waterFull');

