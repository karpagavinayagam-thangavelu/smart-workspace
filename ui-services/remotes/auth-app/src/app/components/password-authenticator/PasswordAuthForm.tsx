import { InputAdornment } from "@mui/material";
import AccountCircle from '@mui/icons-material/AccountCircle';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { TextField } from "@smart/core";

export const PasswordAuthForm = () => {
    return(
        <>
            <div>
                <TextField
                    variant="outlined"
                    size="small"
                    autoComplete="on"
                    label={"User name"}
                    name="userName"
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
                    name="password"
                    InputProps= {{ startAdornment:
                        <InputAdornment position="start">
                          <LockOutlinedIcon />
                        </InputAdornment>
                    }}
                />
            </div>
        </>
    )
}

// export const PasswordAuthForm = withMVC(PasswordAuthViewer,usePasswordAuthController);