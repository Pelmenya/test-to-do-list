import * as yup from 'yup';


export const regExpEmptyString = /''/i;

export const schemaToDoListForm = yup
    .object({
        task: yup.string().required(),
        status: yup.string().required(),
    })
    .required();