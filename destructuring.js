const fish = { id: 58, name: 'king hilsha', price: 9000, phone: '0131456454', address: 'chandpur', dress: 'silver' };

// const phone = fish.phone;
// const price = fish.price;
// const dress = fish.dress;
// const id = fish.id;

const { phone, price, dress, id } = fish;
console.log(phone, price, dress, id);

const company = {
    name: 'GP',
    ceo: { id: 1, name: 'ajmol', food: 'fuska' },
    web: {
        work: 'website development', employee: 22, framework: 'react', tech: {
            first: 'html',
            second: 'css',
            third: 'js'
        }
    }
};

// const work = company.web.work;
// const framework = company.web.framework;

const { work, framework } = company.web;
const { food } = company.ceo;
const { second, third } = company.web.tech;