interface IProps {
    location: string;
    region: string;
    country: string;
    localtime: string;
}

export default function Title({ location, region, country, localtime }: IProps) {
    return (
        <div className="text-center block">
            <h1 className="text-white font-bold text-3xl translate-y-12">
                {location}{region && `, ${region}`}
            </h1>
            <h2 className="text-white font-bold text-3xl translate-y-14">
                {country}
            </h2>
            <h2 className="text-white font-bold text-2xl m-5 translate-y-14">
                {localtime}
            </h2>
            <div className="flex">
                
            </div>
        </div>
    )
}