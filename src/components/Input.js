import "./Input.css";

function Input({ configuration, inputHandler }) {
  return (
    <div
      className={
        configuration.isCorrect ? "input-element" : "input-element input-error"
      }
    >
      <p className="input-title">{configuration.text}</p>
      <input
        type={configuration.type}
        onChange={(e) => inputHandler(e.target.value)}
      />
      {configuration.isCorrect ? (
        ""
      ) : (
        <p className="input-error-message">{configuration.errorMessage}</p>
      )}
    </div>
  );
}

export default Input;
