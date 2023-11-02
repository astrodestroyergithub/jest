const fetchData = require('./fetchData')

// normal function without async
test('peanut butter', () => {
    return fetchData().then(data => {
        expect(data).toBe('peanut butter');
    });
});

// asynchronous function
test('async peanut butter', async () => {
    const data = await fetchData();
    expect(data).toBe('peanut butter');
});