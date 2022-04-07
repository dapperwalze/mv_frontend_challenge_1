import React from "react";
import PageLayout from "./components/layout/index";
import styles from "./app.scss";

const App = () => {
  return (
    <div className={styles.app}>
      <PageLayout />
    </div>
  );
};

export default App;
