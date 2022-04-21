import heroGrid from "../hero-grid.png";

export default function Hero() {
    return (
        <>
            <div className="container mx-auto">
                <div className="w-2/3 mx-auto mt-8 mb-12">
                    <img src={heroGrid} alt="hero-grid" className="w-full" />
                </div>
                <h2 className="mb-8 text-6xl font-semibold">
                    Online Experiences
                </h2>
                <p className="w-full md:w-1/2 text-2xl">
                    Join unique interactive activities led by one-of-a-kind
                    hosts-all without leaving home.
                </p>
            </div>

            <style jsx>{`
                div.mt-8 {
                    max-width: 800px;
                }
            `}</style>
        </>
    );
}
