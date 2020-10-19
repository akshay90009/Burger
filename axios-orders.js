import axios from 'axios';

const instance=axios.create({
   baseURL: 'https://burger-ff6b2.firebaseio.com/'
})
console.log('sffs');

export default instance;