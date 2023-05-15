var counter= 1;
setInterval(function(){
    document.getElementById('radio' + counter).checked = true;
    counter++;
    if(counter > 5){
        counter = 1;
    }
}, 5000);

//tabs on ticket page

const allTabsGroup = document.querySelectorAll(".tabs-group");

allTabsGroup.forEach((tabsGroup) => {
    for (let i = 0; i < tabsGroup.children.length; i++) {
        const tabs = tabsGroup.children[i].querySelectorAll('.tabs');
        const tabContent = tabsGroup.children[i].querySelectorAll('.tab-content-item');
        const indicator = tabsGroup.children[i].querySelector('.indicator');
        const tabsContainer = tabsGroup.children[0];
        const content = tabsGroup.children[1].querySelectorAll('.tab-content-item');

        if (indicator) {
            indicator.classList.add('bg-white', 'h-0.5', 'absolute', 'bottom-0', 'left-0', 'transition-all', 'duration-200');
            indicator.style.width = `${100 / tabs.length}%`;
        }

        if (tabsContainer) {
            tabsContainer.classList.add('relative', 'flex', 'flex-row', 'items-center', 'justify-center', 'text-xl', 'font-semibold');
        }

        if(content) {
            content.forEach((item) => {
                item.classList.add('hidden', 'relative', 'bg-white/60', 'h-550', 'rounded-xl');
            });
            content[0].classList.remove('hidden');
        }

        const updateContent = (old, index) => {
            let oldContent = content[old / 100];
            let newContent = content[index];

            if (oldContent && newContent) {
                oldContent.classList.add('absolute', 'opacity-0', 'transition-all', 'duration-200');
                newContent.classList.add('absolute', 'opacity-0', 'transition-all', 'duration-200');
                

                setTimeout(() =>{
                    oldContent.classList.remove('absolute', 'opacity-0', 'transition-all', 'duration-200');
                    oldContent.classList.add('hidden');

                    newContent.classList.add('!opacity-100');
                    newContent.classList.remove('hidden', 'absolute', 'opacity-0', 'transition-all', 'duration-200', '!opacity-100');
                }, 200);
            }
        }

        tabs.forEach((tab, index) => {
            tab.classList.add('p-4', 'text-center', 'w-full', 'cursor-pointer', 'transition-all', 'duration-200', 'hover:bg-white/50', 'hover:rounded-tl-xl', 'hover:rounded-tr-xl');
            tab.addEventListener('click', () =>{
                let old = (String(indicator.style.transform || 'translateX(0%)').split('translateX(')).filter(Boolean).join('').split('%)')[0];
                indicator.style.transform = `translateX(${index * 100}%)`;
                updateContent(old, index);
            })
        });
    }
});
    
//Traveler dropdown ticket page

var container=document.querySelectorAll('.container')
var select=document.querySelector('.select')
var choosed=document.querySelector('.choosed')
var aero=document.querySelector('.aero')
var menu=document.querySelector('.menu-section')
var options=document.querySelectorAll('.menu-section li')

select.addEventListener('click',()=>{
    select.classList.toggle('select-clicked')
    aero.classList.toggle('aero-rotate')
    menu .classList.toggle('menu-open')
})
options.forEach(option=>{
    option.addEventListener('click',()=>{
        choosed.innerText=option.innerText ;
        select.classList.remove('select-clicked')
        aero.classList.remove('aero-rotate')
        menu.classList.remove('menu-open')
    })
    option.forEach(option=>{
        option.classList.remove('active')
    })
    option.classList.add('active')
})


//JS FOR PLUS MINUS BUTTONS
//const plus = document.querySelector(".plus"),
 //   minus =  document.querySelector(".minus");
 //   travelers1 =  document.querySelector(".minus");

 //   let a = 1;

 //   plus.addEventListener("click",()=>{
 //       a++;
  //      a = (a < 100) ? "0" + a :a;

  //      console.log(a);
  //  });
    
