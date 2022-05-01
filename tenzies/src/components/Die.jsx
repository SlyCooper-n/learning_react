export default function Die(props) {
    return (
        <div
            onClick={() => props.onClick(props.number.id)}
            className={`w-20 aspect-square p-2 flex justify-center items-center ${
                props.number.isHeld ? "bg-green-500" : "bg-white"
            } text-3xl font-semibold rounded-2xl shadow-md`}
        >
            {/* {props.number.value} */}
            <DieDots number={props.number.value} />
        </div>
    );
}

function DieDots({ number }) {
    switch (number) {
        case 1:
            return (
                <div className="w-full h-full grid grid-cols-3 grid-rows-3 justify-items-center items-center">
                    <div className="w-1/2 aspect-square rounded-full bg-black col-start-2 row-start-2"></div>
                </div>
            );

        case 2:
            return (
                <div className="w-full h-full grid grid-cols-3 grid-rows-3 justify-items-center items-center">
                    <div className="w-1/2 aspect-square rounded-full bg-black col-start-3 row-start-1"></div>
                    <div className="w-1/2 aspect-square rounded-full bg-black col-start-1 row-start-3"></div>
                </div>
            );

        case 3:
            return (
                <div className="w-full h-full grid grid-cols-3 grid-rows-3 justify-items-center items-center">
                    <div className="w-1/2 aspect-square rounded-full bg-black col-start-3 row-start-1"></div>
                    <div className="w-1/2 aspect-square rounded-full bg-black col-start-2 row-start-2"></div>
                    <div className="w-1/2 aspect-square rounded-full bg-black col-start-1 row-start-3"></div>
                </div>
            );

        case 4:
            return (
                <div className="w-full h-full grid grid-cols-3 grid-rows-3 justify-items-center items-center">
                    <div className="w-1/2 aspect-square rounded-full bg-black col-start-1 row-start-1"></div>
                    <div className="w-1/2 aspect-square rounded-full bg-black col-start-3 row-start-1"></div>
                    <div className="w-1/2 aspect-square rounded-full bg-black col-start-1 row-start-3"></div>
                    <div className="w-1/2 aspect-square rounded-full bg-black col-start-3 row-start-3"></div>
                </div>
            );

        case 5:
            return (
                <div className="w-full h-full grid grid-cols-3 grid-rows-3 justify-items-center items-center">
                    <div className="w-1/2 aspect-square rounded-full bg-black col-start-1 row-start-1"></div>
                    <div className="w-1/2 aspect-square rounded-full bg-black col-start-3 row-start-1"></div>
                    <div className="w-1/2 aspect-square rounded-full bg-black col-start-2 row-start-2"></div>
                    <div className="w-1/2 aspect-square rounded-full bg-black col-start-1 row-start-3"></div>
                    <div className="w-1/2 aspect-square rounded-full bg-black col-start-3 row-start-3"></div>
                </div>
            );

        case 6:
            return (
                <div className="w-full h-full grid grid-cols-3 grid-rows-3 justify-items-center items-center">
                    <div className="w-1/2 aspect-square rounded-full bg-black col-start-1 row-start-1"></div>
                    <div className="w-1/2 aspect-square rounded-full bg-black col-start-3 row-start-1"></div>
                    <div className="w-1/2 aspect-square rounded-full bg-black col-start-1 row-start-2"></div>
                    <div className="w-1/2 aspect-square rounded-full bg-black col-start-3 row-start-2"></div>
                    <div className="w-1/2 aspect-square rounded-full bg-black col-start-1 row-start-3"></div>
                    <div className="w-1/2 aspect-square rounded-full bg-black col-start-3 row-start-3"></div>
                </div>
            );
    }

    // return (
    //     <div className="w-full h-full grid grid-cols-3 grid-rows-3 justify-items-center items-center">
    //         <div className="w-1/2 aspect-square rounded-full bg-black col-start-3 row-start-1"></div>
    //         <div className="w-1/2 aspect-square rounded-full bg-black col-start-2 row-start-2"></div>
    //         <div className="w-1/2 aspect-square rounded-full bg-black col-start-1 row-start-3"></div>
    //     </div>
    // );
}
