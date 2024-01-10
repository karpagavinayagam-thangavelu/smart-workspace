import { PasswordAuthForm } from "../components/password-authenticator/PasswordAuthForm";
import { PasswordAuthValidator } from "../components/password-authenticator/PasswordAuthValidator";
import styles from "./login.module.scss";
import { Form } from "@smart/core";

export const LoginPage = () => {
    return(
        <section className={styles["login-page"]}>
            <Form>
                <PasswordAuthForm/>
                <PasswordAuthValidator/>
            </Form>
        </section>
    )
}