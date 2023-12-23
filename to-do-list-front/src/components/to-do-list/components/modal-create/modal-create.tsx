import { CreateTaskForm } from '../../../forms/create-task-form/create-task-form';
import { Modal, TModalProps } from '../../../modal/modal';

export const ModalCreate = ({
    title,
    isOpen,
    handlerClose,
    children,
    sizeCloseBtn = 'md',
}: TModalProps) => {
    return (
        <Modal isOpen={isOpen} handlerClose={handlerClose} sizeCloseBtn={sizeCloseBtn}>
           <CreateTaskForm handlerCloseModal={handlerClose}/>
        </Modal>
    );
};
