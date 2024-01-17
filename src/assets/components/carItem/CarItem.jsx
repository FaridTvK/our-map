const CarItem = (props) => {
    return (
        <>
            <h1>Das ist ein CarItem Component</h1>
            <div>
                <h2>Farbe:{props.farbe}</h2>
                <h2>Marke:{props.marke}</h2>
                <p>Model:{props.modell}</p>
                <p>Produktionsjahr:{props.produktionsjahr}</p>
                <p>PS: {props.ps}</p>
            </div>
        </>
    );
}

export default CarItem;