import "./Input.css";

function Input({ configuration }) {
  return (
    <div className={configuration.isCorrect ? "input-element" : "input-element input-error"}>
      <p className="input-title">{configuration.text}</p>
      <input type={configuration.type} />
      {configuration.isCorrect ? "" : <p className="input-error-message">{configuration.errorMessage}</p>}
    </div>
  );
}

export default Input;
