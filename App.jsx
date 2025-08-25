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
    <div>
      <div>bodys main cards</div>
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
