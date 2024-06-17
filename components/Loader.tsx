import Image from 'next/image';

const Loader = () => {
  return (
    <div className="flex-center h-screen w-full">
      <Image src={'/icons/loading-circle.svg'} alt="Loading" width={52} height={52} />
    </div>
  );
};
export default Loader;
