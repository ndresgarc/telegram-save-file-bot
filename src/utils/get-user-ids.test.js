const getUserIds = require('./get-user-ids.cjs');

test('Get user ids', () => {
    expect(
        getUserIds({
            users: [
                {
                    id: '1234',
                    name: 'Alice'
                },
                {
                    id: '5678',
                    name: 'Bob'
                }
            ]
        })
    ).toEqual(
        [1234, 5678]
    );
});