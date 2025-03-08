import styles from "./index.module.css";
export default function FormInput({ label, type = "text", ...props }) {
    return (
        <label className={styles.label}>
            {label && label !== "" && <span>{label}</span>}
            <input type={type} {...props} />
        </label>
    );
}
