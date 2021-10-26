const baseUrl = `${process.env.REACT_APP_BASE_URL}/todos`;
export const loadTodos = () => {
    return fetch(baseUrl).then(res => res.json());

}
export const getTodos = (id) => {
    return fetch(`${baseUrl}/${id}`).then(res => res.json());
}