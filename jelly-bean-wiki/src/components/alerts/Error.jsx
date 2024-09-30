import "../../scss/components/error_alert.scss";


function Error({message}) {
  return <div className="alert-container error-alert">{message}</div>;
}
export default Error;
