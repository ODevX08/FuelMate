import MethodSelector from "./MethodSelector";
import NumericInput from "./NumericInput";

function CalculatorDistance({
    distanceMethod, 
    setDistanceMethod, 
    distance, 
    setDistance, 
    startAddress, 
    setStartAddress, 
    endAddress, 
    setEndAddress, 
}) {
    return (
        <section>
            <MethodSelector 
                name={"distance"}
                value1={"manual"}
                value2={"map"}
                label1={"Ręcznie"}
                label2={"Mapy"}
                currentMethod={distanceMethod}
                onChangeMethod={(method) => {
                    setDistanceMethod(method);
                    setDistance("")
                }}
            />
    
            {distanceMethod === "manual" ? (
                <>
                    <NumericInput 
                        id={"distance"} 
                        label={"Odległość [km]"} 
                        setter={setDistance} 
                        value={distance} 
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