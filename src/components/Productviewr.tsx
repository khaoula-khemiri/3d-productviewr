import ThreeSixty from 'react-360-view'
const Productviewr = () => {

    return (
        <div style={{ display: "flex", height: "100%" }}>
            <div style={{ display: "flex", alignItems: "flex-end", width: '40%', height: "100%", gap: "10px" }}>
                <ThreeSixty
                    amount={3}
                    imagePath="./assets/sofa"
                    fileName="sofa-{index}.jpg"
                    spinReverse


                />
            </div>

            <div style={{ width: '40%', height: "50%" }}>
                <ThreeSixty
                    amount={4}
                    imagePath="./assets/chair"
                    fileName="chair-{index}.png"
                    spinReverse
                    style={{ width: '40%', border: "2px solid black" }}
                />
            </div>
        </div>
    )
}

export default Productviewr