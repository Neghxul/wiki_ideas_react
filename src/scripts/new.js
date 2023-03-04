const newTopic = document.querySelector('.new-topic'),
    body = document.querySelector('body'),
    closeBtn = document.querySelector('.close-button'),
    toolsActions = document.querySelectorAll('.menu-tools li'),
    addBtn = document.querySelector('.fa-plus'),
    newImg = document.querySelector('#new-image'),
    imgShow = document.querySelector('#new-image-preview');

    /*addBtn.addEventListener('click', () => {
        newTopic.style.display = 'block';
        body.style.overflow = 'hidden';
    });*/

    toolsActions.forEach(action => {
        action.addEventListener('click', () => {
            if(toolsActions[0] === action) {
                newTopic.style.display = 'block';
                body.style.overflow = 'hidden';
                console.log("add");
            } else if (toolsActions[1] === action) {
                console.log("edit");
            } else if (toolsActions[2] === action) {
                console.log("erase");
            } else if (toolsActions[3] === action) {
                console.log("report");
            }
        });
    });

    closeBtn.addEventListener('click', () => {
        newTopic.style.display = 'none';
        body.style.overflow = 'auto';
    });

    newTopic.addEventListener('click', (e) => {
        if(e.target === newTopic) {
            newTopic.style.display = 'none';
            body.style.overflow = 'auto';
        }
    });

    newImg.addEventListener('change', () => {
        console.log(newImg.files[0]);

        if (newImg.files[0]) {
            const reader = new FileReader();

            reader.addEventListener('load', () => {
                imgShow.src = reader.result;
                imgShow.style.display = 'inline-block';
                newImg.style.display = 'none';
            });
            reader.readAsDataURL(newImg.files[0]);
        }
    });