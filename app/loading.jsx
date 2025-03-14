import classes from "./loading.module.css";

const Loading = () => {
  return (
    <div className={classes.loaderContainer}>
      <div className={classes.spinner}></div>
      <p className={classes.loadingText}>Fetching Meals...</p>
    </div>
  );
};

export default Loading;
