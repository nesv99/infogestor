const data = [
    { id: 1, name: 'Dato 1' },
    { id: 2, name: 'Dato 2' },
    { id: 3, name: 'Dato 3' },
];

const getData = (req, res) => {
    res.json(data);
};

module.exports = { getData };
