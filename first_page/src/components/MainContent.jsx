export default function MainContent(props) {
    return (
        <>
            <main
                className="relative flex-1"
                style={
                    props.theme
                        ? { background: "#282d35" }
                        : { background: "#fff" }
                }
            >
                <div className="container mx-auto px-2 py-32">
                    <h1 className="mb-16 text-5xl md:text-7xl font-bold">
                        Fun facts about React
                    </h1>
                    <ul className="list-disc pl-12 md:pl-20 text-base md:text-2xl">
                        <li className="py-4">Was first released in 2013</li>
                        <li className="py-4">
                            Was originally created by Jordan Walke
                        </li>
                        <li className="py-4">
                            Has well over 100K stars on GitHub
                        </li>
                        <li className="py-4">Is mantained by Facebook</li>
                        <li className="py-4">
                            Powers thousands of enterprise apps, including
                            mobile apps
                        </li>
                    </ul>
                </div>
            </main>

            <style jsx>{`
                li::marker {
                    color: rgb(125, 211, 252);
                    font-size: 2.2rem;
                }
            `}</style>
        </>
    );
}
