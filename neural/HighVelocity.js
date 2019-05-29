module.exports = function (EventData) {
    
    var brain = require('brain.js')

    // const config = {
    //     binaryThresh: 0.5,
    //     hiddenLayers: [1],     // array of ints for the sizes of the hidden layers in the network
    //     activation: 'sigmoid',  // supported activation types: ['sigmoid', 'relu', 'leaky-relu', 'tanh'],
    //     leakyReluAlpha: 0.01   // supported for activation type 'leaky-relu'
    // };

    // const net = new brain.NeuralNetwork(config);
    const net = new brain.NeuralNetwork();
    EventData = {max:40};
    net.train([{ input:{min: 0.01, max:60.99}, output: {Permitido:1} },
    { input:{min:61, max:67.99}, output: {Excedido:1} },
    { input:{min:68, max:500.99}, output: {Excedido:1}}])
    // const output = net.run(EventData);
    const output = net.run(EventData);
    return output;
}