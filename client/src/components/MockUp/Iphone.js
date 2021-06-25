import "./Iphone.css";
import PropTypes from "prop-types";

function Iphone(props) {
  return (
    <div className="iphone-x mx-8 my-8 w-1/2 md:w-full" id={props.id}>
      <i>Speaker</i>

      <div className="profile-img">
        <img src={props.img} alt="profile" />
      </div>
      <div className="iphone-link-content">
        {props.data &&
          props.data.map((link, i) => {
            return (
              <div>
                <a href={`${link.socialLink}`} target="_blank">
                  <div className="bg-indigo-600 text-center text-white mx-4 my-2">
                    <h2>{link.title}</h2>
                  </div>
                </a>
              </div>
            );
          })}
      </div>
    </div>
  );
}

Iphone.defaultProps = {
  img: "/1.png",
};

Iphone.propTypes = {
  id: PropTypes.string,
  data: PropTypes.array,
  img: PropTypes.string,
};

export default Iphone;
