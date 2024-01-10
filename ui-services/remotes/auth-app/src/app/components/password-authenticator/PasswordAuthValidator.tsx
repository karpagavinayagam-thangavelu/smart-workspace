import { Button } from '@mui/material';
import { withMVC } from '@smart/core';
import { useFormContext } from 'react-hook-form';
import { AuthService } from '../../services/AuthService';
import { useSnackbar } from 'notistack'
type PasswordAuthValidatorModel = {
  prevalidate: () => void;
};
export const PasswordAuthValidationViewer: React.FC<
  PasswordAuthValidatorModel
> = ({ prevalidate }) => {
  return (
    <Button
      variant="contained"
      color="secondary"
      fullWidth
      onClick={prevalidate}
    >
      login
    </Button>
  );
};

export const usePasswordAuthValidator = (): PasswordAuthValidatorModel => {
  const { getValues } = useFormContext();
  const { enqueueSnackbar } = useSnackbar();
  const prevalidate = () => {
    const form = getValues();
    AuthService.login(form.userName, form.password)
      .then((response) => {
        localStorage.setItem('auth', JSON.stringify(response.data));
        enqueueSnackbar({
          variant: "success",
          message: "You have logged in successfully!!! Redirecting to Home Page..."
        });
      })
      .catch((error: any) => {
        enqueueSnackbar({
          message: error?.response?.data?.message,
          variant: "error"
        });
      });
  };
  return {
    prevalidate,
  };
};

export const PasswordAuthValidator = withMVC(
  PasswordAuthValidationViewer,
  usePasswordAuthValidator
);
