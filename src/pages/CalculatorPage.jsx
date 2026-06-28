import { useState } from "react";

function CalculatorPage() {
    const [distanceMethod, setDistanceMethod] = useState("distanceManual"); 
    const [fuelConsumptionMethod, setFuelConsumptionMethod] = useState("fuelManual"); 
    const [distance, setDistance] = useState(0); 
    const [startAddress, setStartAddress] = useState(""); 
    const [endAddress, setEndAddress] = useState(""); 
    const [vehicle, setVehicle] = useState(""); 
    const [fuelConsumption, setFuelConsumption] = useState(0); 
    const [fuelPrice, setFuelPrice] = useState(0); 
    const [numberOfPeople, setNumberOfPeople] = useState(1); 
    const [otherCosts, setOtherCosts] = useState(0); 

    console.log(distanceMethod);

    return (
        <>
            <h1>Kalkulator</h1>

            <form>
                <p>Trasa</p>
                <input type="radio" name="distanceMethod" id="distanceManual" onChange={() => setDistanceMethod("distanceManual")} checked={distanceMethod === "distanceManual"} />
                <label htmlFor="distanceManual">Ręcznie</label>
                <input type="radio" name="distanceMethod" id="distanceMap" onChange={() => setDistanceMethod("distanceMap")} checked={distanceMethod === "distanceMap"} />
                <label htmlFor="distanceMap">Mapy</label><br />
        

                {distanceMethod === "distanceManual" ? (
                    <>
                        <label htmlFor="distance">Odległość [km]</label>
                        <input type="number" id="distance" value={distance} onChange={(event) => setDistance(Number(event.target.value))} /><br />
                    </>
                ) : distanceMethod === "distanceMap" ? (
                    <>
                        <label htmlFor="startAddress">Adres początkowy</label>
                        <input type="text" id="startAddress" value={startAddress} onChange={(event) => setStartAddress(event.target.value)} /><br />
                        <label htmlFor="endAddress">Adres końcowy</label>
                        <input type="text" id="endAddress" value={endAddress} onChange={(event) => setEndAddress(event.target.value)} /><br />
                    </>
                ) : (
                    <p>ERROR</p>
                )}



                <p>Spalanie</p>

                <input type="radio" name="fuelConsumptionMethod" id="fuelManual" onChange={() => setFuelConsumptionMethod("fuelManual")} checked={fuelConsumptionMethod === "fuelManual"} />
                <label htmlFor="fuelManual">Ręcznie</label>
                <input type="radio" name="fuelConsumptionMethod" id="fuelVehicle" onChange={() => setFuelConsumptionMethod("fuelVehicle")} checked={fuelConsumptionMethod === "fuelVehicle"} />
                <label htmlFor="fuelVehicle">Z zapisanych pojazdów</label><br />

                {fuelConsumptionMethod === "fuelManual" ? (
                    <>
                        <label htmlFor="fuelConsumption">Spalanie [l/100 km]</label>
                        <input type="number" id="fuelConsumption" value={fuelConsumption} onChange={(event) => setFuelConsumption(Number(event.target.value))} /><br />
                    </>
                ) : fuelConsumptionMethod === "fuelVehicle" ? (
                    <>
                        <label htmlFor="vehicle">Pojazd</label>
                        <select id="vehicle" value={vehicle} onChange={(event) => setVehicle(event.target.value)}>
                            <option value="0">---</option>
                            <option value="Kia">Kia</option>
                            <option value="Opel">Opel</option>
                        </select><br />
                    </>
                ) : (
                    <p>ERROR</p>
                )}



                <p>Cena paliwa</p>

                <label htmlFor="fuelPrice">Cena paliwa [zł/l]</label>
                <input type="number" id="fuelPrice" value={fuelPrice} onChange={(event) => setFuelPrice(Number(event.target.value))} /><br />

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

                <p>Inne koszty</p>

                <label htmlFor="otherCosts">Inne koszty</label>
                <input type="number" id="otherCosts" value={otherCosts} onChange={(event) => setOtherCosts(Number(event.target.value))} /><br />

                <button type="submit">Oblicz</button>
            </form>

            <section>
                <h3>Wynik:</h3>
                <p>Koszt paliwa: <span>000zł</span></p>
                <p>Koszt całkowity: <span>000zł</span></p>
                <p>Koszt na osobę: <span>000zł</span></p>
            </section>
        </>
    )
}

export default CalculatorPage;