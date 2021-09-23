import { StrengthPipe } from './strength.pipe';

describe('StrengthPipe', () => {
    it('should display weak if strength is 5', () => {
        // arrange all necessary preconditions and inputs
        let pipe = new StrengthPipe();

        // act on the object or class under test
        let val = pipe.transform(6);

        // assert that the expected results have occured
        expect(val).toEqual('6 (weak)');
    })

    
    it('should display strong if strength is 10', () => {
        // arrange all necessary preconditions and inputs
        let pipe = new StrengthPipe();

        // assert that the expected results have occured
        expect(pipe.transform(10)).toEqual('10 (strong)');
    })
})