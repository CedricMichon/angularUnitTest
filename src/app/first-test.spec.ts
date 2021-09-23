describe('my first test', () => {
    let sut;

    beforeEach( () => {
        sut= {}
    })

    it('should be true if true', () => {
        // arrange all necessary preconditions and inputs
        sut.a = false;

        // act on the object or class under test
        sut.a = true;

        // assert that the expected results have occured
        expect(sut.a).toBe(true);
    })
})

