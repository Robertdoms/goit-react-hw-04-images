import { Bars } from 'react-loader-spinner';
import styled from '@emotion/styled';

const LoaderWrapper = () => {
  return (
    <WrapLoad>
      <Bars
        height="80"
        width="80"
        color="rgb(235, 95, 30)"
        ariaLabel="bars-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </WrapLoad>
  );
};
export default LoaderWrapper;

const WrapLoad = styled.div`
  margin-left: auto;
  margin-right: auto;
`;
