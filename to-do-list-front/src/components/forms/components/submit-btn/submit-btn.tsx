import { TError } from '../../../../types/t-error';

export type TSubmitBtnProps = {
    text: string;
    isLoading: boolean;
    isError: boolean;
    error: TError;
};

export const SubmitBtn = ({
    text,
    isLoading,
    isError,
    error,
}: TSubmitBtnProps) => (
    <button
        disabled={isLoading}
        className='group relative flex w-full justify-center btn btn-primary mt-8'
    >
        {isLoading && <span className="loading loading-spinner"></span>}
        {isError && (
            <span className="absolute w-full text-xs text-error top-[-20px]">
                {error?.data?.message}
            </span>
        )}
        {text}
    </button>
);
