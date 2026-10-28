'use strict';
const result=document.querySelector('#approval-result');
document.querySelector('#approve-demo')?.addEventListener('click',()=>{if(result)result.textContent='Illustration approved locally. No approval token was issued and nothing was deployed.';});
document.querySelector('#reset-approval')?.addEventListener('click',()=>{if(result)result.textContent='Illustration reset. Nothing has been deployed.';});
