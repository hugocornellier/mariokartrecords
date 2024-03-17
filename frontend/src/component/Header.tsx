export default function Header() {
    const goToHome = () : string => window.location.href = "/"

    return (
        <div className="mkr-header items-center p-4 flex flex-row w-full text-white">
            <div className={"sidebar-btn p-2 mr-4 cursor-pointer border-2 rounded-lg"}>
                ≡
            </div>
            <div className={"flex flex-row items-center cursor-pointer"} onClick={goToHome}>
                <img
                    src={require('../img/logo.png')}
                    className="logo mr-3"
                    alt={"MarioKartRecords Logo"}
                />
                MarioKartRecords.io
            </div>
        </div>
    )
}
