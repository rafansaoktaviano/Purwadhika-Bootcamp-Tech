const k1 = { fruit: '🥝' };
const k2 = { fruit: '🥝' };

// Using JavaScript
JSON.stringify(k1) === JSON.stringify(k2); // true

// Using Lodash
isEqual(k1, k2);