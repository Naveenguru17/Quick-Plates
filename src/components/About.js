import UserClass from "./UserClass";

const About = () => {
  return (
    <div className="p-4 font-medium">
      <h1 className="text-2xl font-bold mb-4">About Us</h1>
      <p className="mb-4">
        Welcome to our website! This platform was developed to showcase the integration of live APIs in a dynamic and user-friendly way.
        We have utilized Swiggy's live API to fetch real-time data about various restaurants, allowing you to explore the best dining options near you.
      </p>
      <p className="mb-4">
        Our goal is to provide a seamless experience where users can search for restaurants, check their ratings, and explore available offers,
        all while leveraging the latest technology.
      </p>
      <h2 className="text-xl font-semibold mb-2">Meet the Developer</h2>
      <UserClass name="Naveen" />
    </div>
  );
};

export default About;
