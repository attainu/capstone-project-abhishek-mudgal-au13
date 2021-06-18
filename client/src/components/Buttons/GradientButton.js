import PropTypes from "prop-types";

function GradientButton(props) {
  return (
    <div>
      <button className="rounded-full h-12 w-12 items-center justify-center shadow-md {}"></button>
    </div>
  );
}

GradientButton.propTypes = {
    bgGradient = PropTypes.string
};

export default GradientButton;
