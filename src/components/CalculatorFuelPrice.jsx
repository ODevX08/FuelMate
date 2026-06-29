function CalculatorFuelPrice({
    fuelPrice,
    setFuelPrice,
    onNumericChange
}) {
    return (
        <section>
            <label htmlFor="fuelPrice">Cena paliwa [zł/l]</label>
            <input 
                type="text" 
                inputMode="decimal" 
                id="fuelPrice" 
                value={fuelPrice} 
                onChange={(event) => onNumericChange(event.target.value, setFuelPrice)}
            /><br />
        </section>
    )
}

export default CalculatorFuelPrice;