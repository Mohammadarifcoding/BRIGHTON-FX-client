function generateRandomAlphabet() {
    const randomId = '' +
        generateRandomNumber() +
        generateRandomNumber() +
        generateRandomNumber() +
        generateRandomNumber() +
        generateRandomNumber() +
        generateRandomNumber() +
        generateRandomNumber() +
        generateRandomNumber();
    return randomId;
}

const generateRandomCapitalAlphabet = () => {
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const randomIndex = Math.floor(Math.random() * alphabet.length);
    return alphabet[randomIndex];
};
const generateRandomSmallAlphabet = () => {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    const randomIndex = Math.floor(Math.random() * alphabet.length);
    return alphabet[randomIndex];
};

const generateRandomNumber = () => {
    return Math.floor(Math.random() * 10);
};

// Example usage:
export default generateRandomAlphabet;
