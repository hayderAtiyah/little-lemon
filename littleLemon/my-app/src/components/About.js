import aboutImage from "../assets/aboutImage.jpg";
export default function About() {
  return (
    <div className="about-container">
      <h1 className="about-title">Little Lemon</h1>
      <div className="about-container-content">
        <img
          src={aboutImage}
          alt="About Little Lemon"
          className="about-image"
        />
        <p className="about-text">
          Little Lemon began as a family dream in a sunlit kitchen by the
          Mediterranean coast. Inspired by grandmother’s secret recipes and the
          vibrant flavors of fresh citrus, we set out to create dishes that
          celebrate simplicity and wellness. Today, our mission is to bring that
          same warmth and zest to every table—crafting each plate with care,
          passion, and only the finest locally sourced ingredients. We believe
          good food nourishes community, sparks joy, and makes memories.
          <div className="about-WhyChoseUs">
            <h2 className="about-WhyChoseUs-title">Why Choose Little Lemon?</h2>
            <ul className="about-WhyChoseUs-List">
              <li className="about-WhyChoseUs-List-item">
                <strong>Farm-fresh Ingredients:</strong> Sourced daily from
                local growers
              </li>
              <li className="about-WhyChoseUs-List-item">
                <strong>Time-Honored Family Recipes:</strong> Passed down
                through three generations
              </li>
              <li className="about-WhyChoseUs-List-item">
                <strong>Seasonal Menus:</strong> New specials each season to
                keep flavors fresh
              </li>
              <li className="about-WhyChoseUs-List-item">
                <strong>Cozy Ambiance:</strong> Intimate seating and warm
                lighting for any occasion
              </li>
              <li className="about-WhyChoseUs-List-item">
                <strong>Community-Driven:</strong> Partnerships with local
                charities and farmers market events
              </li>
            </ul>
          </div>
        </p>
      </div>
    </div>
  );
}
