const getHandler = require('./get-handler.cjs');

test('Get photo handler', () => {
    expect(
        getHandler({
            photo: ['1234']
        })
    ).toBe("photo");
});