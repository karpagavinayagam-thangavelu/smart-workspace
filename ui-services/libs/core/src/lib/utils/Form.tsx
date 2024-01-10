import React from "react";
import type { PropsWithChildren } from "react";
import type { ValidationMode } from "react-hook-form";
import { FormProvider, useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";

export interface FormProviderProps {
  mode?: keyof ValidationMode;
  reValidateMode?: "onBlur" | "onChange" | "onSubmit";
  onSubmit?: () => void;
}

export const Form: React.FC<PropsWithChildren<FormProviderProps>> =
  React.memo(({ mode = "onChange", reValidateMode = "onBlur",onSubmit, children }) => {
    const methods = useForm({
      mode: mode,
      reValidateMode: reValidateMode,
    });

    return (
      <FormProvider {...methods} >
         <form onSubmit={onSubmit ? methods.handleSubmit(onSubmit) : undefined} className="flex">
          {children}
         </form>
         <DevTool control={methods.control} />
      </FormProvider>
    );
  });

export default Form;
