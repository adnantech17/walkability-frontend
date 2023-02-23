export const FormErrors = ({ errors }) => {
  const keys = Object.keys(errors).filter((i) => errors[i].message);
  return keys.length ? (
    <>
      {keys.map((key) => (
        <div className="form-error-container mb-3" key={key}>
          <h5>{errors[key].message}</h5>
        </div>
      ))}
    </>
  ) : null;
};
