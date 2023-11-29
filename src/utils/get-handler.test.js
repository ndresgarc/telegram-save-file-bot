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
    ).toBe("document");
});

test('Get contact handler', () => {
    expect(
        getHandler({
            contact: {
                phone_number: '+123412341234'
            }
        })
    ).toBe("contact");
});