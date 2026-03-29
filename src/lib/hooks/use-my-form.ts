'use client'

import { zodResolver } from "@hookform/resolvers/zod";
import { FieldValues, SubmitHandler, useForm, SubmitErrorHandler } from "react-hook-form";
import z from "zod";
import React from "react";

export const useMyForm = <T extends FieldValues,>(
    schema: z.ZodObject<T> | any,
    submitCallBack: Function,
    submitErrorCallBack?: Function,
    defaultValues?: any
) => {
    const form = useForm<T>({
        mode: 'onChange',
        resolver: zodResolver(schema),
        defaultValues,
        shouldUnregister: false
    })

    const onSubmit: SubmitHandler<T> = (data: T) => {
        if (data) {

            submitCallBack(data)
        }
    }
    const onError: SubmitErrorHandler<T> = React.useCallback((data) => {
        if (data) {

            submitErrorCallBack && submitErrorCallBack(data)
        }
        console.log('error', data);
    }, [])
    const submitHandler = form.handleSubmit(onSubmit, onError)


    return { submitHandler, form, clear: form.reset, setValue: form.setValue }
}
