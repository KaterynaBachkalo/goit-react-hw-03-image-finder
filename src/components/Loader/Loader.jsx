import { Vortex } from 'react-loader-spinner';
import { StyledLoader } from './Loader.styled';

export const Loader = () => {
  return (
    <StyledLoader>
      <Vortex
        visible={true}
        height="80"
        width="80"
        ariaLabel="vortex-loading"
        wrapperStyle={{ left: '50vw', top: '50vh' }}
        wrapperClass="vortex-wrapper"
        colors={['red', 'green', 'blue', 'yellow', 'orange', 'purple']}
      />
    </StyledLoader>
  );
};
