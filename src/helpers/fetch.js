// Example POST method implementation:
export async function makeRequest(url = '', method = 'GET') {

    const reqInstance = () => {
        const instance =  {
            method: method, // *GET, POST, PUT, DELETE, etc.
            dataType: "application/json"
        }
        return instance
    }
    const reqInst = reqInstance();
    const response = await fetch(url, reqInst);
    const jsonResponse = response.json()

    return  jsonResponse
}