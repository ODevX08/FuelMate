import { useState } from "react";
import CalculatorDistance from "../components/CalculatorDistance";
import CalculatorFuelConsumption from "../components/CalculatorFuelConsumption";
import CalculatorFuelPrice from "../components/CalculatorFuelPrice";
import CalculatorNumberOfPeople from "../components/CalculatorNumberOfPeople";
import CalculatorOtherCosts from "../components/CalculatorOtherCosts";
import CalculatorResult from "../components/CalculatorResult";

function CalculatorPage() {
    const [distanceMethod, setDistanceMethod] = useState("manual"); 
    const [distance, setDistance] = useState(""); 
    const [startAddress, setStartAddress] = useState(""); 
    const [endAddress, setEndAddress] = useState(""); 
    const [fuelConsumptionMethod, setFuelConsumptionMethod] = useState("manual"); 
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

    return (
        <>
            <h1>Kalkulator</h1>

            <p>Dystans</p>
            <form onSubmit={(event) => event.preventDefault()}>
                <CalculatorDistance
                    distanceMethod={distanceMethod}
                    setDistanceMethod={setDistanceMethod}
                    distance={distance}
                    setDistance={setDistance}
                    startAddress={startAddress}
                    setStartAddress={setStartAddress}
                    endAddress={endAddress}
                    setEndAddress={setEndAddress}
                />

                <p>Spalanie</p>
                <CalculatorFuelConsumption
                    fuelConsumptionMethod={fuelConsumptionMethod}
                    setFuelConsumptionMethod={setFuelConsumptionMethod}
                    fuelConsumption={fuelConsumption}
                    setFuelConsumption={setFuelConsumption}
                    vehicle={vehicle}
                    setVehicle={setVehicle}
                />

                <p>Cena paliwa</p>
                <CalculatorFuelPrice 
                    fuelPrice={fuelPrice}
                    setFuelPrice={setFuelPrice}
                />

                <p>Liczba osób</p>
                <CalculatorNumberOfPeople 
                    numberOfPeople={numberOfPeople}
                />

                <p>Inne koszty</p>
                <CalculatorOtherCosts 
                    otherCosts={otherCosts}
                    setOtherCosts={setOtherCosts}
                />
                        
                {distanceMethod === "map" ? (
                    <button type="submit">Oblicz</button>
                ) : null}
            </form>

            <CalculatorResult 
                fuelCost={fuelCost}
                totalCost={totalCost}
                costPerPerson={costPerPerson}
            />
        </>
    )
}

export default CalculatorPage;