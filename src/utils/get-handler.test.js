const getHandler = require('./get-handler.cjs');

test('Get photo handler', () => {
    expect(
        getHandler({
            photo: ['1234']
        })
    ).toBe("photo");
});

test('Get video handler', () => {
    expect(
        getHandler({
            video: {}
        })
    ).toBe("video");
});

test('Get document handler', () => {
    expect(
        getHandler({
            document: {}
        })
    ).toBe("incorrect");
});