import CarItem from "../carItem/carItem";
import { v4 as uuidv4 } from 'uuid';

console.log(uuidv4());
console.log(uuidv4());
const CarList = ({ cars }) => {
    // props ist auch eine Möglichkeit, mit dem Obj ist aber besser 
    // console.log("cars", cars);
    {/* !!!startet immer erst mit der manuellen eingabe!!! */ }
    // ! DAS MACHEN WIR ABER NICHT :D
    {/* <CarItem
                marke={props.carArr[0].marke}
                model={props.carArr[0].modell}
                color={props.carArr[0].farbe}
                year={props.carArr[0].produktionsjahr}
                engine={props.carArr[0].ps}
            /> */}
    return (
        <>
            {cars.map((car, index) => {
                console.log(uuidv4());
                return (
                    <div key={index}>
                        <CarItem
                            wurst={uuidv4()}
                            marke={car.marke}
                            farbe={car.farbe}
                            modell={car.modell}
                            Produktionsjahr={car.produktionsjahr}
                            ps={car.ps}
                        />
                    </div>
                )
            }
            )}
        </>
    );
}

export default CarList;