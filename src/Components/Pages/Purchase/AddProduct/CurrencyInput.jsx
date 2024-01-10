
const CurrencyInput = ({currency}) => {
    return (
        <option value={currency.value}>{currency.label}</option>
    );
};

export default CurrencyInput;