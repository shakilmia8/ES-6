// declare variable based on the name of an object property

const myObject = { x: 2, y: 54, z: 567, a: 5, b: 32 };
const { x, b } = myObject;


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

console.log(company?.web?.tech?.third);
console.log(company?.backend?.tech?.third);