const expect = require('expect');
const {generateMessage, generateLocationMessage} = require('./message');

describe('generateMessage', ()=>{
    it('should generate correct message object',()=>{
        var from ="jen";
        var text ="some message";
        var message = generateMessage(from, text);
              
        expect(message.createdAt).toBeA('number');
        expect(message).toInclude({from, text});
    });
});

describe('generateLocationMessage', ()=>{
    it('should generate correct location object',()=>{
        var from = 'admin';
        var latitude= 50;
        var longitude = 30;
        var url = `https://www.google.com/maps/@50,30`;
        var message = generateLocationMessage(from, latitude, longitude);

        expect(message.createdAt).toBeA('number');
        expect(message).toInclude({from, url});

    })
});