import styles from "./index.module.css";
export default function Button({ children, ...props }) {
    return (
        <Button className={styles.Button} {...props}>
            {children}
        </Button>
    );
}
