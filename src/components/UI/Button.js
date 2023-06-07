const Button = (props) => {
  return (
    <button className={props.className} onClick={props.onClick}>
      {!props.buttonText ? 'Gerar número' : props.buttonText}
    </button>
  );
};

export default Button;
