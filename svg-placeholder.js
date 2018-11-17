const xmlDeclaration = `<?xml version='1.0' encoding='UTF-8' ?>`
const svgVersion = `xmlns='http://www.w3.org/2000/svg' version='1.1'`

function header(att) {
    var svg = new String
    att.width = att.width || 250
    att.height = att.height || 250
    att.bg = att.bg || 'white'
    att.fg = att.fg || 'gray'
    var size = `width='${att.width}' height='${att.height}'`
    if (att.embeded == true) svg += xmlDeclaration + "\n"
    svg += `<svg ${svgVersion} ${size} style='background-color: ${att.bg}'>\n`
    return svg
}

function rectangle(att) {
    var att = typeof att == 'undefined' ? new Object : att
    var svg = header(att)
    svg += `<rect width=${att.width/2} height=${att.height/2} x=${att.width/4} y=${att.height/4} fill=${att.fg} />\n` 
    return svg + "</svg>"
}

function circle(att) {
    var att = typeof att == 'undefined' ? new Object : att
    var svg = header(att)
    var radius = [att.height, att.width].sort()[0] / 4
    svg += `<circle cx=${att.width/2} cy=${att.height/2} fill=${att.fg} r=${radius} />\n` 
    return svg + "</svg>"
}

function text(att) {
    var att = typeof att == 'undefined' ? new Object : att
    att.text = att.text || `${att.width}x${att.height}`
    var svg = header(att)
    svg += `<text x='${att.width/2}' y='${att.width/2}' text-anchor='middle' dominant-baseline='middle' style='font-family: sans-serif' fill=${att.fg}>${att.text}</text>`
    return svg + "</svg>"
}