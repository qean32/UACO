import { UseFormSetValue, FieldValues } from "react-hook-form";
import { TformFilterSchema } from "./filter.schema";

export type setValueFormProps<T extends FieldValues> = { setValue: UseFormSetValue<T> }
