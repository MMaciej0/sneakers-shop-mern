import ReactLoading from 'react-loading';

const Loader = () => {
  return (
    <div className="absolute top-[30vh] left-[50vw] translate-x-[-50%] opacity-50">
      <ReactLoading type="balls" color="#3bcfff" width="20vw" height="200px" />
    </div>
  );
};

export default Loader;
