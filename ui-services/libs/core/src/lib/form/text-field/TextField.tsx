import { TextField as MuiTextField,
    StandardTextFieldProps as MuiStandardTextFieldProps,
    TextFieldVariants
} from "@mui/material";
import { useFormContext } from "react-hook-form";

export interface TextFieldProps  extends Omit<MuiStandardTextFieldProps, "variant" | "label" | "name" | "helperText">{
    noBorder?: boolean;
    name: string;
    label: JSX.Element|string;
    variant: TextFieldVariants;
}
export const TextField:React.FC<TextFieldProps> = ({
    variant="standard",
    ...props
}) => {
    const { register } = useFormContext();
    return (
        <MuiTextField
            {...register(props.name)}
            variant = {variant}
            {...props}
        />
    );
}