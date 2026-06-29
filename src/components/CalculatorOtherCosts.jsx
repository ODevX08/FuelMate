function CalculatorOtherCosts({
    otherCosts,
    setOtherCosts,
    onNumericChange
}) {
    return (
        <section>
            <label htmlFor="otherCosts">Inne koszty</label>
            <input 
                type="text" 
                inputMode="decimal" 
                id="otherCosts" 
                value={otherCosts} 
                onChange={(event) => onNumericChange(event.target.value, setOtherCosts)}
            /><br />
        </section>
    )
}

export default CalculatorOtherCosts;