import { useState } from "react";

function CalculatorPage() {
    const [distanceMethod, setDistanceMethod] = useState("manual"); 
    const [fuelConsumptionMethod, setFuelConsumptionMethod] = useState("manual"); 
    const [distance, setDistance] = useState(""); 
    const [startAddress, setStartAddress] = useState(""); 
    const [endAddress, setEndAddress] = useState(""); 
    const [vehicle, setVehicle] = useState(""); 
    const [fuelConsumption, setFuelConsumption] = useState(""); 
    const [fuelPrice, setFuelPrice] = useState(""); 
    const [numberOfPeople, setNumberOfPeople] = useState(1); 
    const [otherCosts, setOtherCosts] = useState(""); 

    const distanceNumber = parseFloat(distance) || 0;
    const fuelConsumptionNumber = parseFloat(fuelConsumption) || 0;
    const fuelPriceNumber = parseFloat(fuelPrice) || 0;
    const otherCostsNumber = parseFloat(otherCosts) || 0;

    const fuelCost = (distanceNumber * fuelConsumptionNumber) / 100 * fuelPriceNumber;
    const totalCost = fuelCost + otherCostsNumber;
    const costPerPerson = totalCost / numberOfPeople;

    const handleNumericChange = (value, setter) => {
        const normalizedValue = value.replace(",", ".");
        
        if (normalizedValue === "" || /^\d*\.?\d*$/.test(normalizedValue)) {
            setter(normalizedValue);
        }
    };

    return (
        <>
            <h1>Kalkulator</h1>

            <form onSubmit={(event) => event.preventDefault()}>
                <section>
                    <p>Trasa</p>
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
                                onChange={(event) => handleNumericChange(event.target.value, setDistance)}
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



                <section>
                    <p>Spalanie</p>

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
                                onChange={(event) => handleNumericChange(event.target.value, setFuelConsumption)}
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



                <section>
                    <p>Cena paliwa</p>

                    <label htmlFor="fuelPrice">Cena paliwa [zł/l]</label>
                    <input 
                        type="text" 
                        inputMode="decimal" 
                        id="fuelPrice" 
                        value={fuelPrice} 
                        onChange={(event) => handleNumericChange(event.target.value, setFuelPrice)}
                    /><br />
                </section>
                        


                <section>
                    <p>Liczba osób</p>

                    <label htmlFor="numberOfPeople">Liczba osób</label>
                    <select id="numberOfPeople" value={numberOfPeople} onChange={(event) => setNumberOfPeople(Number(event.target.value))}>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                    </select><br />
                </section>



                <section>
                    <p>Inne koszty</p>

                    <label htmlFor="otherCosts">Inne koszty</label>
                    <input 
                        type="text" 
                        id="otherCosts" 
                        value={otherCosts} 
                        onChange={(event) => handleNumericChange(event.target.value, setOtherCosts)}
                    /><br />
                </section>


                        
                {distanceMethod === "map" ? (
                    <button type="submit">Oblicz</button>
                ) : null}
            </form>



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
        </>
    )
}

export default CalculatorPage;