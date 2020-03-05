
export function hello(){
    import("/assets/test.js").then(module => {
        console.log(module)
    })
}