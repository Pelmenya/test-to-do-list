import { Layout } from './layout/layout';
import { ToDoList } from './to-do-list/to-do-list';

export const App = () => {
    return (
        <div className="App">
            <Layout>
                <ToDoList />
            </Layout>
        </div>
    );
};
