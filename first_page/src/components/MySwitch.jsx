import { useState } from "react";
import { Switch } from "@headlessui/react";

export default function MySwitch(props) {
    const [enabled, setEnabled] = useState(false);

    function toggleTheme() {
        setEnabled((prevEnabled) => !prevEnabled);
        props.toggler();
    }

    return (
        <>
            <span className="font-semibold">Dark</span>
            <Switch
                checked={enabled}
                onChange={toggleTheme}
                className={`${enabled ? "bg-sky-300" : "bg-gray-200"}
            w-11 h-6 mx-2 relative inline-flex items-center rounded-full`}
            >
                <span className="sr-only">Toggle theme</span>
                <span
                    className={`${enabled ? "translate-x-6" : "translate-x-1"}
                inline-block w-4 h-4 transform bg-white rounded-full`}
                />
            </Switch>
            <span className="font-semibold">Light</span>
        </>
    );
}
