// // vue.config.js
// module.exports = {
//     publicPath: ‘/Vue.js-Project/’
//     }

module.exports = {
    publicPath: process.env.NODE_ENV === "production" 
    ? "/Vue.js-Project /" : "/",
  };

  