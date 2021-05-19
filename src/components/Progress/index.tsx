import { useProgress } from "../../store/hooks";
import './../../styles/styles.css'

const ProgressComponent = () => {
  const { progress } = useProgress();
  return (
    <>
      { (progress.progress === true) ? (
        <div className="progress-container">
          <div className="loader ease-linear rounded-full border-8 border-t-8 border-gray-200 h-24 w-24"></div>
        </div>
      ) : ""}
    </>
  );
};

export default ProgressComponent;