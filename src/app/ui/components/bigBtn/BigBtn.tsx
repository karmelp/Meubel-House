import './bigBtn.scss';

type Props = {
  title: string;
  onClick?: () => void;
};

const BigBtn: React.FC<Props> = ({ title, onClick }) => {
  return (
    <button className='bigBtn' onClick={onClick}>
      {title}
    </button>
  );
};

// BigBtn.propTypes = {
//   // The text to display inside the button
//   title: PropTypes.string.isRequired,
//   // The color of the button
//   color: PropTypes.string.isRequired,
// };

export default BigBtn;
