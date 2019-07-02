document.addEventListener("DOMContentLoaded", () => {

    // Define the width and height of your visualization
    const width = 800
    const height = 400

    // Grab the container
    const container = d3.select("#viz")

    // Append an svg node and confiture its width and height
    const svg = container.append("svg")
        .attr("width", width)
        .attr("height", height)
        .style("border", "1px solid #000")

    // ========================================
    // Render your shapes here
    const circle1 = svg.append("circle")
        .attr("cx", 250)
        .attr("cy", 100)
        .attr("r", 50)
        .attr("fill", "lightblue")
        .attr("stroke", "#000")
        .attr("stroke-width", 20)

    const circle2 = svg.append("circle")
        .attr("cx", 550)
        .attr("cy", 100)
        .attr("r", 50)
        .attr("fill", "lightblue")
        .attr("stroke", "#000")
        .attr("stroke-width", 20)

    const rectangle = svg.append("rect")
        .attr("x", 370)
        .attr("y", 200)
        .attr("width", 50)
        .attr("height", 100);


    const line = svg.append("line")
        .attr("x1", 300)
        .attr("y1", 300)
        .attr("x2", 500)
        .attr("y2", 300)
        .attr("stroke-width", 10)
        .attr("stroke", "black");

    const line2a = svg.append("line")
        .attr("x1", 200)
        .attr("y1", 290)
        .attr("x2", 280)
        .attr("y2", 250)
        .attr("stroke-width", 5)
        .attr("stroke", "black");

    const line2b = svg.append("line")
        .attr("x1", 200)
        .attr("y1", 220)
        .attr("x2", 280)
        .attr("y2", 220)
        .attr("stroke-width", 5)
        .attr("stroke", "black");

    const line2c = svg.append("line")
        .attr("x1", 200)
        .attr("y1", 220)
        .attr("x2", 280)
        .attr("y2", 220)
        .attr("stroke-width", 5)
        .attr("stroke", "black");

    const mytext = svg.append("text")
        .text("Hello Panda")
        .attr("x", 380)
        .attr("y", 380);

    // ...

    // ========================================

})
