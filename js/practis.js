function buttonClick() {
    fetch('https://jsonplaceholder.typicode.com/comments')
    .then((res) => res.json())
    .then(data => clickButton(data))
}


function clickButton(data) {
    const containerDiv = document.getElementById('user-list')
    for (const butt of data) {
        const set = document.createElement('div')
        set.innerHTML = `

        <h3> name : ${butt.name}</h3>
        <h4> body : ${butt.body}</h4>
        <p> email : ${butt.email}</p>
        <p> postId : ${butt.postId}</p>
        <p> id : ${butt.id}</p>
        `;
    containerDiv.appendChild(set)
    
}}