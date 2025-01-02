    window.onload = function() {
        setTimeout(() => {
            const nameElement = document.getElementById('name');
            nameElement.classList.add('permanent');
            document.getElementById('search-container').classList.remove('hidden');
        }, 3000);
    };

    const addLinkButton = document.getElementById('add-link-button');
    const modal = document.getElementById('modal');
    const saveLinkButton = document.getElementById('save-link');

    addLinkButton.addEventListener('click', () => {
        modal.style.display = 'flex';
    });

    saveLinkButton.addEventListener('click', () => {
        const linkName = document.getElementById('link-name').value;
        const linkUrl = document.getElementById('link-url').value;

        if (linkName && linkUrl) {
            const sidebar = document.querySelector('.sidebar');
            const newLink = document.createElement('a');
            newLink.href = linkUrl;
            newLink.target = '_blank';
            newLink.textContent = linkName;
            sidebar.insertBefore(newLink, addLinkButton);

            document.getElementById('link-name').value = '';
            document.getElementById('link-url').value = '';
            modal.style.display = 'none';
        } else {
            alert('Please fill out both fields.');
        }
    });

    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
