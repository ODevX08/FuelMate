function CalculatorResult({
    fuelCost,
    totalCost,
    costPerPerson
}) {
    return (
        <section>
            <h2>Wynik</h2>
            <p>
                Koszt paliwa:
                <strong>{fuelCost.toLocaleString("pl-PL", {minimumFractionDigits: 2, maximumFractionDigits: 2})} zł</strong>
            </p>
            <p>
                Koszt całkowity:
                <strong>{totalCost.toLocaleString("pl-PL", {minimumFractionDigits: 2, maximumFractionDigits: 2})} zł</strong>
            </p>
            <p>
                Koszt na osobę:
                <strong>{costPerPerson.toLocaleString("pl-PL", {minimumFractionDigits: 2, maximumFractionDigits: 2})} zł</strong>
            </p>
        </section>
    )
}

export default CalculatorResult;