import { Puff } from 'react-loader-spinner';

const SpinLoader = () => {
  return (
    <div className='spin-loader'>
      <Puff type='Buff' color='00BFFF' height={550} width={80} />
    </div>
  );
};

export default SpinLoader;
