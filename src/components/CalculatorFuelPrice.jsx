import NumericInput from "./NumericInput";

function CalculatorFuelPrice({
    fuelPrice,
    setFuelPrice,
}) {
    return (
        <section>
            <NumericInput 
                id={"fuelPrice"}
                label={"Cena paliwa [zł/l]"}
                setter={setFuelPrice}
                value={fuelPrice}
            />
            <br />
        </section>
    )
}

export default CalculatorFuelPrice;