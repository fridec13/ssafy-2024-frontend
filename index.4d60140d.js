const e=document.getElementById("chat-container"),t=document.getElementById("message-form"),s=document.getElementById("user-input");function n(e,t="user"){let s=document.createElement("div");s.classList.add("mb-6","flex","items-start","space-x-3");let a=document.createElement("div");a.classList.add("w-10","h-10","rounded-full","flex-shrink-0","flex","items-center","justify-center","font-bold","text-white"),"assistant"===t?(a.classList.add("bg-gradient-to-br","from-green-400","to-green-600"),a.textContent="A"):(a.classList.add("bg-gradient-to-br","from-blue-500","to-blue-700"),a.textContent="U");let d=document.createElement("div");return d.classList.add("max-w-full","md:max-w-2xl","p-3","rounded-lg","whitespace-pre-wrap","leading-relaxed","shadow-sm"),"assistant"===t?d.classList.add("bg-gray-200","text-gray-900"):d.classList.add("bg-blue-600","text-white"),d.textContent=e,s.appendChild(a),s.appendChild(d),s}function a(){e.scrollTop=e.scrollHeight}t.addEventListener("submit",async t=>{t.preventDefault();let d=s.value.trim();if(!d)return;e.appendChild(n(d,"user")),s.value="",a();let l=await new Promise(e=>{setTimeout(()=>{e("가짜 AI: "+d)},1500)});e.appendChild(n(l,"assistant")),a()});
//# sourceMappingURL=index.4d60140d.js.map
