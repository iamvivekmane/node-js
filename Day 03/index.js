function fetchData() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Data received!");
        }, 2000);
    });
}

async function getData() {
    console.log("Fetching data...");
    const result = await fetchData();
    console.log(result);
    console.log("Done!");
}

getData();