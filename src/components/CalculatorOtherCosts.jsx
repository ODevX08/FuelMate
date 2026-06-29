import NumericInput from "./NumericInput";

function CalculatorOtherCosts({
    otherCosts,
    setOtherCosts,
}) {
    return (
        <section>
            <NumericInput 
                id={"otherCosts"}
                label={"Inne koszty"}
                setter={setOtherCosts}
                value={otherCosts}
            />
            <br />
        </section>
    )
}

export default CalculatorOtherCosts;