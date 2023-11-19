const wrapperElement = document.querySelector('div.wrapper');

for (let i = 1; i <= 100 ; i++ ){
    const fizzBuzzElement = document.createElement('article');
    fizzBuzzElement.className = 'card';

    fizzBuzzElement.addEventListener('click', function(){
        fizzBuzzElement.classList.toggle('active');
      
    });

    if ( i % 15 === 0){
        fizzBuzzElement.append('fizzbuzz');
        fizzBuzzElement.classList.add('bg-warning');
        fizzBuzzElement.classList.add('rounded-4');
        fizzBuzzElement.classList.add('text-center');

    } else if (i % 3 === 0){
        fizzBuzzElement.append('fizz');
        fizzBuzzElement.classList.add('bg-success');
        fizzBuzzElement.classList.add('rounded-4');
        fizzBuzzElement.classList.add('text-center');
    } else if (i % 5 === 0) {
        fizzBuzzElement.append('buzz');
        fizzBuzzElement.classList.add('bg-primary');
        fizzBuzzElement.classList.add('rounded-4');
        fizzBuzzElement.classList.add('text-center');
    } else {
        fizzBuzzElement.append(i);
        fizzBuzzElement.classList.add('bg-danger');
        fizzBuzzElement.classList.add('rounded-4');
        fizzBuzzElement.classList.add('text-center');
    }

    wrapperElement.appendChild(fizzBuzzElement);
}
