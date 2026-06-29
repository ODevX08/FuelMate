import MethodSelector from "./MethodSelector";
import NumericInput from "./NumericInput";

function CalculatorFuelConsumption({
    fuelConsumptionMethod,
    setFuelConsumptionMethod,
    fuelConsumption,
    setFuelConsumption,
    vehicle,
    setVehicle
}) {
    return (
        <section>
            <MethodSelector 
                name={"fuelConsumption"}
                value1={"manual"}
                value2={"vehicle"}
                label1={"Ręcznie"}
                label2={"Z zapisanych pojazdów"}
                currentMethod={fuelConsumptionMethod}
                onChangeMethod={(method) => {
                    setFuelConsumptionMethod(method);
                    setFuelConsumption("")
                }}
            />

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