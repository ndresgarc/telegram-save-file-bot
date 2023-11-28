const loadConfig = require('./load-config.cjs');

process.env['TELEGRAM_BOT_TOKEN'] = '12345667890';
process.env['ALLOWED_USERS'] = 'alice:1111,bob:2222';

test('Load config', () => {
    expect(
        loadConfig()
    ).toEqual(
        {
            token: '12345667890',
            users: [
                {
                    name: 'alice',
                    id: '1111'
                },
                {
                    name: 'bob',
                    id: '2222'
                }
            ]
        }
    );
});
