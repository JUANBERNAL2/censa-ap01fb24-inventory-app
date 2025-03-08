import styles from "./index.module.css";
import { Head } from "@inertiajs/react";
import LoginForm from "@/components/auth/login-form";

export default function Login() {
    return (
        <>
            <Head title="Inicio de Sesion" />
            <main className={styles.login}>
                <LoginForm />
            </main>
        </>
    );
}
