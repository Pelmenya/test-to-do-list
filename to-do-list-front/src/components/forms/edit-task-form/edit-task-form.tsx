import { yupResolver } from '@hookform/resolvers/yup';
import { Input } from '../components/input/input';
import { FieldValues, useForm } from 'react-hook-form';
import { SubmitBtn } from '../components/submit-btn/submit-btn';
import { FormWrapper } from '../components/form-wrapper/form-wrapper';
import { schemaToDoListForm } from '../schemas/yup.schemas';
import { TError } from '../../../types/t-error';
import { ListBox } from '../../list-box/list-box';
import { statuses } from '../../list-box/constants';
import { useCallback, useEffect, useState } from 'react';
import {
    useLazyGetAllTasksQuery,
    usePutUpdateTaskMutation,
} from '../../../api/to-do-list.ts/to-do-list';

export const EditTaskForm = ({
    taskId,
    handlerCloseModal,
}: {
    taskId: string;
    handlerCloseModal: () => void;
}) => {
    const [activIdx, setActiveIdx] = useState(0);
    const [getAllTasks, { data }] = useLazyGetAllTasksQuery();

    const [putUpdateTask, { isLoading, isError, error }] =
        usePutUpdateTaskMutation();

    const {
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
            const res = await putUpdateTask({ ...dto, id: Number(taskId) }).unwrap();
            if (res.id) {
                await getAllTasks('').unwrap();
                handlerCloseModal();
            }
        }
    };

    const handlerSetStaus = useCallback(
        (value: any) => {
            setValue('status', value);
        },
        [setValue]
    );

    useEffect(() => {
        if (taskId && data) {
            const task = data?.find((item) => String(item.id) === taskId);
            setValue('task', task?.task);
            setValue('status', task?.status);
            setActiveIdx(statuses.findIndex((item) => task?.status === item));
        }
    }, [taskId, setValue, data]);

    useEffect(() => {
        if (!data) getAllTasks('').unwrap();
    }, [data, getAllTasks]);

    return (
        <FormWrapper
            title={`Редактирование задачи #${taskId}`}
            name="editTask"
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
                activeIdx={activIdx}
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
                text="Редактировать"
                error={error as TError}
                isError={isError}
                isLoading={isLoading}
            />
        </FormWrapper>
    );
};
