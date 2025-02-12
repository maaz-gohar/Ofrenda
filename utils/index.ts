// Function to go back to the previous screen
export function goBack(path: string) {
    console.log(path)
    const pathArr = path.split('/')
    console.log(pathArr)
    if (pathArr.length > 1) {
        // Remove the last screen path from the array
        pathArr.pop();
        return pathArr.join('/')
    } else {
        return '/'
    }
}
