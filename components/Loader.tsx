import Image from "next/image";

const Loader = () => (
  <div className='flex h-screen w-screen flex-col items-center justify-center gap-2'>
    <Image
      src='/assets/logo.svg'
      alt='loader'
      width={50}
      height={40}
      className='object-contain'
    />
    <p className='text-sm font-bold text-primary-grey-300'>Загрузка...</p>
  </div>
);

export default Loader;
