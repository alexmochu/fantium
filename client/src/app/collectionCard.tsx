export function CollectionCard() {
  return (
    <div>
      <div className="flex min-h-[428px] w-[320px] flex-col bg-[#191919]">
        <img className="p-2" alt="collectio_image" src="https://fantium-bucket.s3.amazonaws.com/gold.png"/>
        <h2 className="mt-8 ml-7 text-xs text-white font-normal">Silver</h2>
        <div className="mb-4 ml-7 flex justify-between mr-7 items-end font-black">
          <div className="font-normal text-3xl text-white">0.0020%</div>
          <div className="text-[#535353] text-sm font-normal">Ownership / Token</div>
        </div>
        <hr className="border border-[#2a2b2b]"/>
        <p className="mb-2 mt-5 ml-7 text-xs text-[#BDFF1E]">$ 9,999</p>
        <ul className="mb-10 ml-7 mr-7 flex flex-col gap-y-2 text-white">
          <li className="flex text-sm center-items">
            <img className="mr-4 h-4" alt="icon" src="https://fantium-bucket.s3.amazonaws.com/%F0%9F%92%8E.png"/>
            Early access (allowlist) on the next Thiem NFT drop
          </li>
          <li className="flex text-sm center-items">
            <img className="mr-4 h-4" alt="icon" src="https://fantium-bucket.s3.amazonaws.com/%F0%9F%91%8B.png"/>
            Exclusive workout video
          </li>
        </ul>
        <button className="rounded-full bg-[#BDFF1E] mb-7 ml-7 mr-7 h-10 text-lg font-medium text-black">BUY ON OPENSEA </button>
      </div>
      <p className="mt-3 text-center text-[#535353]">100 Tokens</p>
    </div>
  );
}