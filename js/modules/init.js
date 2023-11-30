async function fetchEmployees() {
    try {
        const response = await fetch('/data/employees.json'); 
        const data = await response.json();
        
    } catch (error) {
        console.error(error);
    }

}
fetchEmployees();

export default fetchEmployees