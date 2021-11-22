import * as React from "react";
import { styled } from "stitches.config";
import ExpandingHelperText from "./expandingHelperText";
import FieldContainer from "./fieldContainer";
import Label from "./label";
import { defaultInputStyles } from "./textField";

const TextAreaRoot = styled("textarea", {
  ...defaultInputStyles,
  variants: {
    variant: {
      vertical: {
        resize: "vertical"
      },
      horizontal: {
        resize: "horizontal"
      },
      "no-resize": {
        resize: "none"
      }
    }
  },

  defaultVariants: {
    variant: "vertical"
  }
});

type TextFieldProps = {
  label: string;
  helperText?: string;
  disabled?: boolean;
  id?: string;
  error?: boolean;
  errorText?: string;
  rows?: number;
};

const TextArea = React.forwardRef<React.ElementRef<"textarea">, TextFieldProps>(function TextArea(
  props,
  ref
) {
  const { id = " ", label = "Label", error = false, helperText, rows = 4, ...other } = props;

  return (
    <FieldContainer>
      <TextAreaRoot as="textarea" id={id} placeholder=" " ref={ref} rows={rows} {...other} />
      <Label
        htmlFor={id}
        textTransform="uppercase"
        css={{
          mb: "$2"
        }}
      >
        {label}
      </Label>
      <ExpandingHelperText expanded={error} text={helperText} />
    </FieldContainer>
  );
});

export default TextArea;