async function users() {
    let result = await fetch("https://picsum.photos/v2/list?page=2&limit=100");
    result = await result.json();
    document.getElementById("username").innerHTML = result.map((user) => 
     `<div id="container">
     <img src="${user.download_url}">
     <P>${user.author}</p>
    </div>`   
    );
    console.log(result)
}



document.getElementById("get_images").addEventListener("click", () => {
     users();
 });


