import { Button, InputAdornment, TextField } from "@mui/material";
import styles from "./login.module.scss";
import AccountCircle from '@mui/icons-material/AccountCircle';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';

export const RegisterPage = () => {
    return(
        <section className={styles["login-page"]}>
            <div>
                <TextField
                    variant="outlined"
                    size="small"
                    label="User name"
                    InputProps= {{ startAdornment:
                        <InputAdornment position="start">
                          <AccountCircle />
                        </InputAdornment>
                    }}
                />
            </div>
            <div>
                <TextField
                    type="password"
                    variant="outlined"
                    size="small"
                    label="Password"
                    InputProps= {{ startAdornment:
                        <InputAdornment position="start">
                          <LockOutlinedIcon />
                        </InputAdornment>
                    }}
                />
            </div>
            <div>
                <Button variant="contained" color="secondary" fullWidth >Register</Button>
            </div>
        </section>
    )
}