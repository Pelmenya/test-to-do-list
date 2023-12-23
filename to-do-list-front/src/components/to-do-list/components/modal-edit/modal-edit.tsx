import { EditTaskForm } from '../../../forms/edit-task-form/edit-task-form';
import { Modal, TModalProps } from '../../../modal/modal';

export const ModalEdit = ({
    title,
    isOpen,
    handlerClose,
    children,
    sizeCloseBtn = 'md',
    taskId,
}: TModalProps & { taskId: string }) => {
    return (
        <Modal
            isOpen={isOpen}
            handlerClose={handlerClose}
            sizeCloseBtn={sizeCloseBtn}
        >
            <EditTaskForm handlerCloseModal={handlerClose} taskId={taskId} />
        </Modal>
    );
};
