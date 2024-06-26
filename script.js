document.addEventListener('DOMContentLoaded', function() {
    const laserPointer = document.createElement('div');
    laserPointer.classList.add('laser-pointer');
    document.body.appendChild(laserPointer);

    document.body.addEventListener('mousemove', function(e) {
        laserPointer.style.display = 'block';
        laserPointer.style.left = e.clientX + 'px';
        laserPointer.style.top = e.clientY + 'px';
    });

    document.body.addEventListener('mouseleave', function() {
        laserPointer.style.display = 'none';
    });

    document.body.addEventListener('mouseenter', function() {
        laserPointer.style.display = 'block';
    });
});
let clickCount = 0;

        document.addEventListener('click', () => {
            clickCount++;
            if (clickCount === 7) {
                document.getElementById('secret-message').style.display = 'block';
                document.getElementById('initial-message').style.display = 'none';

            }
        });
