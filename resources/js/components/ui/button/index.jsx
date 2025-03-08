import styles from "./index.module.css";

export default function Button({ children, styleType = "primary", ...props }) {
    return (
        <button
            className={`${styles.button} ${styles[`button-${styleType}`]}`}
            {...props}
        >
            {children}
        </button>
    );
}
