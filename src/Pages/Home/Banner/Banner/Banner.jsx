

const Banner = () => {
  return (
    <div>
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage:
            "url(https://i.ibb.co/fG28MkK/pexels-rebecca-zaal-764681.jpg)",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Welcome to My School</h1>
            <p className="mb-5">
            Could you please provide the name of your school, its location, and any specific aspects or features you would like me to highlight? Additionally, let me know if there are any particular events, achievements, or characteristics you want me to include in the text
            </p>
            <button className="btn btn-info">Contact Us</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
