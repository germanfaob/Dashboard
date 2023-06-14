import { PropTypes } from "prop-types";

export function Alert({ message }) {
  return (
    <div className="" role="alert">
      <span className="">{message}</span>
    </div>
  );
}

Alert.propTypes = {
  message: PropTypes.string.isRequired,
};
