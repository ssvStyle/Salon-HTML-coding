window.addEventListener('DOMContentLoaded', () => {
    const appointmentList = document.getElementById('appointment-list');
    const modal = document.getElementById('myModal');
    const timeId = document.getElementById('timeId');
    const modalTiming = document.getElementById('modalTiming');

    appointmentList.addEventListener('click', (event) => {

        const timeIdDataset = event.target.dataset;

        console.log(event.target.className == 'appointment_block');

        if (event.target.className === 'appointment_block') {
            timeId.value = event.target.dataset['timeid'];
            modalTiming.innerText = event.target.dataset['time'];
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