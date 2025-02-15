// Initialize Fabric.js canvas
const canvas = new fabric.Canvas('canvas');

// Pre-made templates (using base64 images for simplicity)
const templates = [
    {
        id: 1,
        name: 'Template 1',
        url: 'data:image/svg+xml;base64,PHN2Zy width="800" height="600" xmlns="http://www.w3.org/2000/svg"><rect width="100%" height="100%" fill="#ffcc99"/><text x="50%" y="50%" font-size="30" text-anchor="middle" fill="#333">Template 1</text></svg>'
    },
    {
        id: 2,
        name: 'Template 2',
        url: 'data:image/svg+xml;base64,PHN2Zy width="800" height="600" xmlns="http://www.w3.org/2000/svg"><rect width="100%" height="100%" fill="#99ccff"/><text x="50%" y="50%" font-size="30" text-anchor="middle" fill="#333">Template 2</text></svg>'
    },
    {
        id: 3,
        name: 'Template 3',
        url: 'data:image/svg+xml;base64,PHN2Zy width="800" height="600" xmlns="http://www.w3.org/2000/svg"><rect width="100%" height="100%" fill="#ccffcc"/><text x="50%" y="50%" font-size="30" text-anchor="middle" fill="#333">Template 3</text></svg>'
    }
];

// Load templates into the sidebar
const templatesContainer = document.getElementById('templates');
templates.forEach(template => {
    const templateElement = document.createElement('img');
    templateElement.src = template.url;
    templateElement.alt = template.name;
    templateElement.addEventListener('click', () => loadTemplate(template.url));
    templatesContainer.appendChild(templateElement);
});

// Load template onto the canvas
function loadTemplate(url) {
    fabric.Image.fromURL(url, function(img) {
        canvas.setBackgroundImage(img, canvas.renderAll.bind(canvas), {
            scaleX: canvas.width / img.width,
            scaleY: canvas.height / img.height
        });
    });
}

// Add text to the canvas
function addText() {
    const text = new fabric.Textbox('Your Text Here', {
        left: 100,
        top: 100,
        width: 150,
        fontSize: 20,
        fill: '#000'
    });
    canvas.add(text);
}

// Add image to the canvas
function addImage() {
    const imageUrl = prompt('Enter image URL:');
    if (imageUrl) {
        fabric.Image.fromURL(imageUrl, function(img) {
            img.scaleToWidth(100);
            canvas.add(img);
        });
    }
}

// Add emoji to the canvas
function addEmoji() {
    const emojiUrl = 'https://twemoji.maxcdn.com/v/13.1.0/72x72/1f600.png'; // Example emoji URL
    fabric.Image.fromURL(emojiUrl, function(img) {
        img.scaleToWidth(50);
        canvas.add(img);
    });
}