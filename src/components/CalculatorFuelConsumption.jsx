import NumericInput from "./NumericInput";

function CalculatorFuelConsumption({
    fuelConsumptionMethod,
    setFuelConsumptionMethod,
    fuelConsumption,
    setFuelConsumption,
}) {
    return (
        <section>
            <input type="radio" name="fuelConsumptionMethod" id="fuelManual" onChange={() => {setFuelConsumptionMethod("manual"); setFuelConsumption("")}} checked={fuelConsumptionMethod === "manual"} />
            <label htmlFor="fuelManual">Ręcznie</label>
            <input type="radio" name="fuelConsumptionMethod" id="vehicle" onChange={() => {setFuelConsumptionMethod("vehicle"); setFuelConsumption("")}} checked={fuelConsumptionMethod === "vehicle"} />
            <label htmlFor="vehicle">Z zapisanych pojazdów</label><br />

            {fuelConsumptionMethod === "manual" ? (
                <>
                    <NumericInput 
                        id={"fuelConsumption"}
                        label={"Spalanie [l/100km]"}
                        setter={setFuelConsumption}
                        value={fuelConsumption}
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