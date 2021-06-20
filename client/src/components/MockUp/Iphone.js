import './Iphone.css'
import '../../Pages/DashBoard/Gradients.css'
import PropTypes from "prop-types";

function Iphone(props) {
  return (
    <div className="iphone-x mx-8 my-8 w-1/2 md:w-full" id={props.id}>
      <i>Speaker</i>
   
      <div className="profile-img">
      <img src="/1.png" alt="profile" /></div>
    </div>
  );
}

Iphone.propTypes = {
  id: PropTypes.string,
};

export default Iphone
