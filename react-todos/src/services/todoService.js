const baseUrl = `${process.env.REACT_APP_BASE_URL}/todos`;
export const loadTodos = () => {
    return fetch(baseUrl).then(res => res.json());

}
export const getTodos = (id) => {
    return fetch(`${baseUrl}/${id}`).then(res => res.json());
}

export const createTodos = (id) => {
    return fetch(baseUrl, {
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify({
            titles: todo.title,
            complete: todo.complete
        })
    }).then((res) => res.json())
};

export const updateTodos = (id) => {
    return fetch(`${baseUrl}/${todo.id}`, {
        method: "PUT",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify({
            id: todo.id,
            titles: todo.title,
            complete: todo.complete
        })
    }).then((res) => res.json())
};

export const deleteTodo = (id) => {
    return fetch(`${baseUrl}/${id}`, {
        method: 'DELETE',
    }).then(res => res.JSON());
}