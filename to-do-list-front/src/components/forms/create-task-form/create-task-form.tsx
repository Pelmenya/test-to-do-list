import { yupResolver } from '@hookform/resolvers/yup';
import { Input } from '../components/input/input';
import { FieldValues, useForm } from 'react-hook-form';
import { SubmitBtn } from '../components/submit-btn/submit-btn';
import { FormWrapper } from '../components/form-wrapper/form-wrapper';
import { schemaToDoListForm } from '../schemas/yup.schemas';
import { TError } from '../../../types/t-error';
import { ListBox } from '../../list-box/list-box';
import { statuses } from '../../list-box/constants';
import { useCallback } from 'react';
import {
    useLazyGetAllTasksQuery,
    usePostCreateTaskMutation,
} from '../../../api/to-do-list.ts/to-do-list';

export const CreateTaskForm = () => {
    const [getAllTasks] =
    useLazyGetAllTasksQuery();

    const [postCreateTask, { isLoading, isError, error}] =
        usePostCreateTaskMutation();
    /*     const err: TError = {
        data: {
            error: '',
            message: '',
            statusCode: 200,
        },
    };
 */ const {
        handleSubmit,
        control,
        formState: { errors },
        setValue,
    } = useForm({
        resolver: yupResolver(schemaToDoListForm),
        reValidateMode: 'onChange',
    });

    const onSubmit = async (dto: FieldValues) => {
        if (dto) {
            const res = await postCreateTask(dto).unwrap();
            if (res.id){
                await getAllTasks('').unwrap();
            }
        }
    };

    const handlerSetStaus = useCallback(
        (value: any) => {
            setValue('status', value);
        },
        [setValue]
    );

    return (
        <FormWrapper
            title="Создание задачи"
            name="createTask"
            onSubmit={handleSubmit(onSubmit)}
        >
            <Input
                type="text"
                id="TaskId"
                placeholder="Текст задачи"
                label="Задача"
                control={control}
                error={!!errors.task}
                name="task"
            />
            <ListBox
                id="Statuses"
                label="Статус"
                items={statuses}
                handlerSetItem={handlerSetStaus}
                activeIdx={0}
            />
            <Input
                hidden={true}
                type="text"
                id="StatusId"
                placeholder="Статус"
                label="Роль"
                name="status"
                error={!!errors.status}
                control={control}
            />

            <SubmitBtn
                text="Создать"
                error={error as TError}
                isError={isError}
                isLoading={isLoading}
            />
        </FormWrapper>
    );
};
