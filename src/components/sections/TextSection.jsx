import Bakery from '../../assets/images/bageri.webp';
import Cafe from '../../assets/images/cafe.webp';

export default function TextSection() {
    return (
        <>
            <div className="">
                <div className="">
                    <h2>Bageri</h2>
                    <hr />
                    <p></p>
                </div>
                <img src={Bakery} alt="" />
            </div>
            <div className="">
                <div className="">
                    <h2>Café</h2>
                    <hr />
                    <p></p>
                </div>
                <img src={Cafe} alt="" />
            </div>
        </>
    )
}