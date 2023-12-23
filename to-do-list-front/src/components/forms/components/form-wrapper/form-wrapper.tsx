import { ReactNode } from 'react';
import { TBaseProps } from '../../../../types/t-base-props';

export type TFormWrapperProps = TBaseProps & {
    title: ReactNode;
    name: string;
    onSubmit: () => void;
};

export const FormWrapper = ({ title, name, onSubmit, children }: TFormWrapperProps) => (
    <div className="flex min-h-full w-full items-center justify-center py-2 px-4 sm:px-6 lg:px-8 text-base-content mt-[-1rem]">
        <div className="w-full max-w-md min-w-[360px]">
            <h2 className="text-center text-3xl font-bold tracking-tight mt-0">
                {title}
            </h2>
            <form
                name={name}
                className="mt-8 flex flex-col gap-6"
                onSubmit={onSubmit}
            >
                {children}
            </form>
        </div>
    </div>
);
