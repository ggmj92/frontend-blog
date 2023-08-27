/**
 * A function that is executed when the DOM content is loaded.
 * It sets up a click event listener for the delete button (if present) and sends a delete request to delete a post.
 *
 * @event DOMContentLoaded
 */
document.addEventListener('DOMContentLoaded', () => {
    /**
     * The delete button element.
     *
     * @type {HTMLButtonElement}
     */
    const btnDelete = document.getElementById('btnDelete');

    if (btnDelete) {
        /**
         * Event listener for the delete button's click event.
         *
         * @param {MouseEvent} ev - The click event.
         * @returns {Promise<void>}
         */
        btnDelete.addEventListener('click', async (ev) => {
            /**
             * The clicked delete button element.
             *
             * @type {HTMLButtonElement}
             */
            const clickedButton = ev.target;

            console.log('click', clickedButton);

            /**
             * The response from the delete request.
             *
             * @type {Response}
             */
            const response = await fetch(`/admin/deletepost/${clickedButton.dataset.id}`, {
                method: 'delete'
            });

            /**
             * The JSON data extracted from the delete response.
             *
             * @type {Object}
             */
            const data = await response.json();

            console.log('delete response', data);

            // Redirect to the home page after deleting the post.
            window.location.href = '/';
        });
    }
});
