import { CiMedicalCross } from "react-icons/ci";
const PriceOption = ({option}) => {

    const {name, price, features,duration} = option;
    return (
        <div className="bg-green-300 rounded-xl mb-3 flex flex-col">
            <h2 className="text-center">
                <span className="text-3xl">{price}</span>
                <span className="text-xl ml-2">{duration}</span>
            </h2>
            <h1 className="text-center font-lg font-semibold">{name}</h1>
            <div className="flex-grow p-4">
            {
                features.map(feature => <div className="flex  items-center ml-6">
                    <CiMedicalCross />
                    <p className="font-lg ml-2 text-red-500 font-semibold">{feature}</p>
                </div>)
            }
            </div>
            <button className="bg-green-500 w-full font-bold py-2 rounded-2xl">Bye now</button>
        </div>
    );
};

export default PriceOption;