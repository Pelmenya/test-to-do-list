import { TBaseProps } from '../../types/t-base-props';

export const Layout = ({ children }: TBaseProps) => (
    <main className="container mx-auto max-w-7xl px-2 py-4 sm:px-6 lg:px-8">
        <h1 className='font-bold text-5xl'>Менеджер задач</h1>
        <div className="w-full min-h-main">{children}</div>
    </main>
);
