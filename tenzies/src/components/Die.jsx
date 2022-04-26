export default function Die(props) {
    return (
        <div
            onClick={() => props.onClick(props.number.id)}
            className={`w-20 aspect-square flex justify-center items-center ${
                props.number.isHeld ? "bg-green-500" : "bg-white"
            } text-3xl font-semibold rounded-2xl shadow-md`}
        >
            {props.number.value}
        </div>
    );
}
