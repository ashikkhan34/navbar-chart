import PriceOption from "./PriceOption";


const PriceOptions = () => {


    const PriceOptions = [
        {
            "id": 1,
            "name": "Basic Plan",
            "price": 25,
            "currency": "USD",
            "duration": "yearly",
            "features": [
                "Access to gym equipment",
                "Locker room access",
                "1 free personal training session"
            ]
        },
        {
            "id": 2,
            "name": "Standard Plan",
            "price": 45,
            "currency": "USD",
            "duration": "monthly",
            "features": [
                "Access to gym equipment",
                "Locker room access",
                "5 free personal training sessions",
                "Access to group fitness classes"
            ]
        },
        {
            "id": 3,
            "name": "Premium Plan",
            "price": 75,
            "currency": "USD",
            "duration": "monthly",
            "features": [
                "24/7 gym access",
                "Personal locker",
                "Unlimited personal training sessions",
                "Access to group fitness classes",
                "Diet and nutrition consultation",
                "Sauna and spa access"
            ]
        },
        {
            "id": 4,
            "name": "Annual Plan",
            "price": 500,
            "currency": "USD",
            "duration": "yearly",
            "features": [
                "All Standard and Premium features",
                "1 month free",
                "Priority booking for classes",
                "One guest pass per month"
            ]
        }
    ]

    return (
        <div>
            <h1 className="text-3xl ">Best Price in the Town</h1>
            <div className="grid lg:grid-cols-3 gap-10 text-black ">
            {
                PriceOptions.map(option => <PriceOption option={option}></PriceOption>)
            }
            </div>
        </div>
    );
};

export default PriceOptions;