window.addEventListener('DOMContentLoaded', () => {
    const appointmentList = document.getElementById('appointment-list');
    const modal = document.getElementById('myModal');

    //console.log(event.target.id);

    appointmentList.addEventListener('click', (event) => {
        if (event.target) {
            modal.style.display = 'block';
            document.body.style.overflow = 'hidden';
        }
    });

    modal.addEventListener('click', (event) => {
        modal.style.display = 'block';
        if (event.target.className == 'close' || event.target.className == 'modal') {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });

});