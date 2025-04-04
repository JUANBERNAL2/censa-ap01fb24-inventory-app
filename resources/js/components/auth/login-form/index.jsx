import styles from "./index.module.css";
import { Heading, FormInput, Button } from "@/components/ui";

export default function LoginForm({ Headinglevel = 1 }) {
    return (
        <section className={styles.section}>
            <Heading level={Headinglevel}>Iniciar Sesion</Heading>
            <form>
                <FormInput
                    label="Usuario:"
                    type="text"
                    name="username"
                    autoFocus
                    required
                />
                <FormInput
                    label="Contraseña:"
                    type="password"
                    name="userpwd"
                    required
                />
                <Button type="submit">Ingresar</Button>
            </form>
        </section>
    );
}
