import HTTP from "./";
import {useMutation, useQuery} from "react-query";


const getTasks = () =>
    HTTP.get("/tasks/all")
        .then((response) => response.data)
        .catch((error) => console.log(error.message));


const createTask = (task) => HTTP.post("/tasks/create", task);

const createTasksJson = (task) =>
    HTTP.post("/tasks", {...task, name: task.name}).then(
        (response) =>
            new Promise((resolve) => {
                setTimeout(() => resolve(response.data), 5000);
            })
    );

const useTasks = () => {
    const context = useQuery("getTasks", getTasks);
    return {...context, tasks: context.data};
};

const useCreateTask = (config) => {
    const mutation = useMutation(createTasksJson, config);
    return mutation.mutateAsync;
};

export {createTask, useTasks, useCreateTask};