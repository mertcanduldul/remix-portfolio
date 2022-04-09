const oceanVideo = "https://cdn.builder.io/o/assets%2F63f829e0e7a44824a11461f3037b38ed%2F321eda8b91344a349a2fe52c1400c348%2Fcompressed?apiKey=63f829e0e7a44824a11461f3037b38ed&token=321eda8b91344a349a2fe52c1400c348&alt=media&optimized=true";
const spaceVideo = "https://cdn.builder.io/o/assets%2F63f829e0e7a44824a11461f3037b38ed%2Feec9bda8d36c455ab48e875a7701a171%2Fcompressed?apiKey=63f829e0e7a44824a11461f3037b38ed&token=eec9bda8d36c455ab48e875a7701a171&alt=media&optimized=true";
const rainforestVideo = "https://cdn.builder.io/o/assets%2F63f829e0e7a44824a11461f3037b38ed%2F6ed2e518224c469c95a709338243fb2a%2Fcompressed?apiKey=63f829e0e7a44824a11461f3037b38ed&token=6ed2e518224c469c95a709338243fb2a&alt=media&optimized=true";

export default function Fantastic() {
    const RANDOM = Math.floor(Math.random() * 3) + 1;
    let video;
    switch (RANDOM) {
        case 1:
            video = oceanVideo;
            break;
        case 2:
            video = spaceVideo;
            break;
        case 3:
            video = rainforestVideo;
            break;
        default:
            video = oceanVideo;
            break;
    }
    const text = "MERT CAN DÜLDÜL";
    return (
        <div className="text-center p-5">
            <div className="flex relative flex-col">
                <video className="absolute top-0 left-0 w-full h-full pointer-events-none object-cover inset-1" autoPlay loop muted playsInline key={video}>
                    <source src={video} type="video/mp4" />
                </video>
                <div className="text-center p-{10} bg-white mix-blend-lighten text-9xl font-extrabold self-stretch">
                    {text}
                </div>
            </div>
        </div>
    );
}
