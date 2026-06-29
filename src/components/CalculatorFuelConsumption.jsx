function CalculatorFuelConsumption({
    fuelConsumptionMethod,
    setFuelConsumptionMethod,
    fuelConsumption,
    setFuelConsumption,
    onNumericChange
}) {
    return (
        <section>
            <input type="radio" name="fuelConsumptionMethod" id="fuelManual" onChange={() => {setFuelConsumptionMethod("manual"); setFuelConsumption("")}} checked={fuelConsumptionMethod === "manual"} />
            <label htmlFor="fuelManual">Ręcznie</label>
            <input type="radio" name="fuelConsumptionMethod" id="vehicle" onChange={() => {setFuelConsumptionMethod("vehicle"); setFuelConsumption("")}} checked={fuelConsumptionMethod === "vehicle"} />
            <label htmlFor="vehicle">Z zapisanych pojazdów</label><br />

            {fuelConsumptionMethod === "manual" ? (
                <>
                    <label htmlFor="fuelConsumption">Spalanie [l/100 km]</label>
                    <input 
                        type="text" 
                        inputMode="decimal" 
                        id="fuelConsumption" 
                        value={fuelConsumption} 
                        onChange={(event) => onNumericChange(event.target.value, setFuelConsumption)}
                    /><br />
                </>
            ) : fuelConsumptionMethod === "vehicle" ? (
                <>
                    <label htmlFor="vehicle">Pojazd</label>
                    <select id="vehicle" value={vehicle} onChange={(event) => setVehicle(event.target.value)}>
                        <option value="0">---</option>
                        <option value="Kia">Kia</option>
                        <option value="Opel">Opel</option>
                    </select><br />
                </>
            ) : null}
        </section>
    )
}

export default CalculatorFuelConsumption;