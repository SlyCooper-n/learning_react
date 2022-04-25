export default function Die(props) {
    return (
        <div className="w-20 aspect-square flex justify-center items-center bg-white text-3xl font-semibold rounded-2xl shadow-md">
            {props.number}
        </div>
    );
}
