import { SmallForm } from "components";
import styles from "./homeHeader.module.scss";

const HomeHeader = () => {
  return (
    <div className={styles["header-wrapper"]}>
      <div className={styles["header-text-container"]}>
        <div className="mb-5 pt-5">
          <h2 className={`${styles["w-txt"]} text-center pt-10`}>
            Aracınıza anahtar ihtiyacınız mı var?
            <div className={styles["w-bg"]}>
              <span className="mx-auto main-blue">Dert etmeyin!</span>
            </div>
          </h2>
        </div>
        <div className={`${styles["s-form"]} mt-8`}>
          <SmallForm />
        </div>
        <div className={styles["curve-lines"]}></div>
      </div>
    </div>
  );
};

export default HomeHeader;
