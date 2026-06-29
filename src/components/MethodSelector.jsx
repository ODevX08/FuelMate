function MethodSelector({
    name, 
    value1,
    value2,
    label1,
    label2,
    currentMethod,
    onChangeMethod,
}) {
    const id1 = `${name}-${value1}`;
    const id2 = `${name}-${value2}`;

    return (
        <div>
            <input 
                type="radio" 
                name={name} 
                id={id1} 
                onChange={() => {
                    onChangeMethod(value1);
                }} 
                checked={currentMethod === value1} 
            />
            <label htmlFor={id1}>{label1}</label>
            <input 
                type="radio" 
                name={name} 
                id={id2} 
                onChange={() => {
                    onChangeMethod(value2);

                }} 
                checked={currentMethod === value2} 
                />
            <label htmlFor={id2}>{label2}</label>
        </div>
    )
}

export default MethodSelector;