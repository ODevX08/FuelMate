function CalculatorDistance({
    distanceMethod, 
    setDistanceMethod, 
    distance, 
    setDistance, 
    startAddress, 
    setStartAddress, 
    endAddress, 
    setEndAddress, 
    onNumericChange
}) {
    return (
        <section>
            <input type="radio" name="distanceMethod" id="distanceManual" onChange={() => {setDistanceMethod("manual"); setDistance("")}} checked={distanceMethod === "manual"} />
            <label htmlFor="distanceManual">Ręcznie</label>
            <input type="radio" name="distanceMethod" id="map" onChange={() => {setDistanceMethod("map"); setDistance("")}} checked={distanceMethod === "map"} />
            <label htmlFor="map">Mapy</label><br />
    
            {distanceMethod === "manual" ? (
                <>
                    <label htmlFor="distance">Odległość [km]</label>
                    <input 
                        type="text" 
                        inputMode="decimal" 
                        id="distance" 
                        value={distance} 
                        onChange={(event) => onNumericChange(event.target.value, setDistance)}
                    /><br />
                </>
            ) : distanceMethod === "map" ? (
                <>
                    <label htmlFor="startAddress">Adres początkowy</label>
                    <input type="text" id="startAddress" value={startAddress} onChange={(event) => setStartAddress(event.target.value)} />
                    <label htmlFor="endAddress">Adres końcowy</label>
                    <input type="text" id="endAddress" value={endAddress} onChange={(event) => setEndAddress(event.target.value)} /><br />
                </>
            ) : null}
        </section>
    )
}

export default CalculatorDistance;