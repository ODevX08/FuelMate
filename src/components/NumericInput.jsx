function NumericInput({id, label, value, setter}) {
    const handleNumericChange = (inputValue) => {
        const normalizedValue = inputValue.replace(",", ".");
        
        if (normalizedValue === "" || /^\d*\.?\d*$/.test(normalizedValue)) {
            setter(normalizedValue);
        }
    };

    return (
        <>
            <label htmlFor={id}>{label}</label>
            <input 
                type="text" 
                inputMode="decimal" 
                id={id} 
                value={value} 
                onChange={(event) => handleNumericChange(event.target.value)}
            />
        </>
    )
}

export default NumericInput;