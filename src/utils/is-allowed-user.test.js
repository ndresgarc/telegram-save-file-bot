const isAllowedUser = require('./is-allowed-user.cjs');

test('Is allowed user', () => {
    expect(
        isAllowedUser(
            [ 1234, 5678 ],
            1234
        )
    ).toEqual(
        true
    );
});

test('Is NOT allowed user', () => {
    expect(
        isAllowedUser(
            [ 1234, 5678 ],
            9999
        )
    ).toEqual(
        false
    );
});