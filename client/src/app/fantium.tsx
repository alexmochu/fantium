import { CollectionCard } from './collectionCard'

export function Fantium({ title }: { title: string }) {
  return (
    <div className='flex flex-col min-h-screen items-center h-full bg-[#0f0e0e] p-4 m-0'>
      <div className='flex flex-col gap-8 pl-10 pt-10 pr-10 pb-5 mx-auto xl:flex-row'>
        <CollectionCard/>
        <CollectionCard/>
        <CollectionCard/>
      </div>
      <div className="flex w-[320px] xl:w-[1104px] pr-0 xl:pr-10 pl-10 mb-10 justify-end">
        <div className="mt-0.5 mr-2 text-white">VALUATION METHOD</div>
        <div>
          <img alt="arrow-right" src="https://fantium-bucket.s3.amazonaws.com/arrow-narrow-left.svg"/>
        </div>
      </div>
    </div>
  );
}

export default Fantium;
