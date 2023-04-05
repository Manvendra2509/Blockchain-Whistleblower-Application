import Login from './Auth';

const Home = () => {
  return (
    <div className="navbar bg-neutral text-neutral-content">
      <a className="btn btn-ghost normal-case text-xl">WhistleBlower</a>
      <Login/>
    </div>
  );
};

export default Home;
