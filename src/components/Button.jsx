import PropTypes from 'prop-types';

const Button = ({
    label,
    iconURL,
    backgroundColor,
    textColor,
    borderColor,
    fullWidth,
  }) => {
    return (
      <button
        className={`flex justify-center items-center gap-2 px-7 py-4 border font-montserrat text-lg leading-none
        ${
          backgroundColor
            ? `${backgroundColor} ${textColor} ${borderColor}`
            : "bg-coral-red text-white border-coral-red"
        } rounded-full ${fullWidth && "w-full"}`}
      >
        {label}
  
        {iconURL && (
          <img
            src={iconURL}
            alt='arrow right icon'
            className='w-5 h-5 ml-2 bg-white rounded-full'
          />
        )}
      </button>
    );
  };

  Button.propTypes = {
    label: PropTypes.string,
    iconURL: PropTypes.string,
    backgroundColor: PropTypes.string,
    textColor: PropTypes.string,
    borderColor: PropTypes.string,
    fullWidth: PropTypes.bool,
  };
  
  export default Button;
