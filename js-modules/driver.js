export const driverName = 'chrome';



 export function quitDriver () {
    console.log('DRIVER QUIT')
}

// the default export
export default function getDriver() {
    console.log('DRIVER GET!');
}


// Store driver version in a variable caller driverVersion and store 119 and export it
export const driverVersion = 119;
