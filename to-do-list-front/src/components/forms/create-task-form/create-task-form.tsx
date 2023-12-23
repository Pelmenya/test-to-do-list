import { yupResolver } from '@hookform/resolvers/yup';
import { Input } from '../components/input/input';
import { useForm } from 'react-hook-form';
import { SubmitBtn } from '../components/submit-btn/submit-btn';
import { FormWrapper } from '../components/form-wrapper/form-wrapper';
import { schemaToDoListForm } from '../schemas/yup.schemas';
import { TError } from '../../../types/t-error';
import { ListBox } from '../../list-box/list-box';
import { statuses } from '../../list-box/constants';
import { useCallback } from 'react';

export const CreateTaskForm = () => {
    const err: TError = {
        data: {
            error: '',
            message: '',
            statusCode: 200,
        },
    };
    const {
        handleSubmit,
        control,
        formState: { errors },
        setValue,
    } = useForm({
        resolver: yupResolver(schemaToDoListForm),
        reValidateMode: 'onChange',
    });

    const onSubmit = async (dto: any) => {
        if (dto) {
            /*             const postUser = await postLogin(dto).unwrap();
            if (postUser) {
            }
 */
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
                activeIdx={2}
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
                error={err}
                isError={false}
                isLoading={false}
            />
        </FormWrapper>
    );
};
