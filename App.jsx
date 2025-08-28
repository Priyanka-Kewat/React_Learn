/**
 * Header
 *   - logo
 *   - links
 * Body
 *   - search
 *   - Restaurant Container
 *       - Restaurant Card (img, name of res, star rating, cuisines)
 * Footer
 *   - copyrights
 *   - Links
 *   - Address
 *   - contact
 *
 */

const HeaderTop = () => {
  return (
    <div className="Head-Container">
      <div className="rest-logo">
        <img
          height="100%"
          width="100%"
          src="https://static.vecteezy.com/system/resources/previews/008/687/818/non_2x/food-delivery-logo-free-vector.jpg"
          alt="rest-logo"
        />
      </div>
      <div>
        <ul className="List-Items">
          <li>Home</li>
          <li>About US</li>
          <li>Contact</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const RestCardsCont = () => {
  return (
    <div
      style={{
        width: "400px",
        backgroundColor: "#eae8e8",
        padding: "0.8rem",
        borderRadius: "1 rem",
        flexWrap: "wrap",
      }}
    >
      <div>
        <img
          height="100%"
          width="100%"
          src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2025/6/18/bced9b52-f88c-4869-93f9-bafb284d7f83_240185.jpg"
          alt="image not loaded"
        />
      </div>
      <div>
        <h2>Burgur king</h2>
        <h3>4.3 Rating</h3>
        <h3>Burgur american</h3>
        <h3>Toli chowki</h3>
      </div>
    </div>
  );
};

const BodyCont = () => {
  return (
    <div>
      <div>
        <input type="Search" />
      </div>
      <div>
        <RestCardsCont />
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div>
      <HeaderTop />
      <BodyCont />
      <h1>Footer</h1>
    </div>
  );
};

export default AppLayout;
