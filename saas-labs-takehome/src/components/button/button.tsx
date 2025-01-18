import { ComponentProps } from "react";
import styles from "./button.module.css";

export const Button = (props: ComponentProps<"button">) => {
    return <button {...props} className={styles["button-primary"]} />;
};
