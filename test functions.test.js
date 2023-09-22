// function to test with Jest

const greet = require('./test functions');

describe('greet',()=>{
    it('should be called',()=>{
        const names = ['Jacobo','Rodrigo','Gonzalo'];
        expect(greet(names)).toBe();
    });
});