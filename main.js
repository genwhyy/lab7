const p = document.querySelectorAll(".object"); 

p.forEach((planeta) => { 
planeta.addEventListener('mouseover', () => { 
    planeta.style.transform = 'scale(1.2)'; 
}); 

planeta.addEventListener('mouseout', () => { 
    planeta.style.transform = 'scale(1)'; 
}); 
});