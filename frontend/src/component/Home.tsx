import Race from "./Race/Race";

export default function Home(props: any) {
    return (
        <div className="text-black">
            <h1 className={'mb-5 text-2xl'}>
                Welcome to MarioKartRuns!
            </h1>
            <p>
                This website aims to provide a full record of world records for the Mario Kart series.
            </p>
            <h1 className={'mb-5 text-xl mt-5'}>
                Latest Records
            </h1>
            <Race cc={'all'} game={'all'} />
        </div>
    )
}