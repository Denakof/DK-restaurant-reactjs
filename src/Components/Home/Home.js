import "./Home.css";
const Home = (props) => {
  return (
    <>
      <section className="sec2">
        <img
          alt=""
          className="img1"
          src="https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Nnx8fGVufDB8fHx8&w=1000&q=80"
        ></img>
        <p className="parg2">
          <h2
            style={{
              color: "rgb(63, 12, 12)",
              fontFamily: "'IM Fell English SC', serif",
              marginBottom: "36px",
            }}
          >
            It’s all here. All in one app.
          </h2>
          Discover local, on-demand delivery or Pickup from restaurants, nearby
          grocery and convenience stores, and more.
        </p>
      </section>
      <div class="image1"></div>
      <section className="sec3">
        <img
          alt=""
          className="img3"
          src="https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Nnx8fGVufDB8fHx8&w=1000&q=80"
        ></img>
        <p className="parg3">
          <h2
            style={{
              color: "rgb(63, 12, 12)",
              fontFamily: "'IM Fell English SC', serif",
              marginBottom: "36px",
              marginLeft: "-5px",
            }} >
            Every Flavor Welcome
          </h2>
          From your neighborhood sushi spot to the burger and fries you crave,
          choose from over 300,000 local and national favorites across Jordan.{" "}
        </p>
        <br style={{ clear: "both" }} />
      </section>
    </>
  );
};
export default Home;
