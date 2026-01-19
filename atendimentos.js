function adicionarBarbeiro(){if(!nomeBarbeiro.value)return;barbeiros.push({id:Date.now(),nome:nomeBarbeiro.value});nomeBarbeiro.value="";salvarBarbeiros()}
function salvarBarbeiros(){localStorage.setItem("barbeiros",JSON.stringify(barbeiros));listarBarbeiros();atualizarSelectBarbeiros()}
function listarBarbeiros(){listaBarbeiros.innerHTML="";barbeiros.forEach(b=>{const li=document.createElement("li");li.textContent=b.nome;listaBarbeiros.appendChild(li)})}
function atualizarSelectBarbeiros(){barbeiroSelect.innerHTML=barbeiros.map(b=>`<option value="${b.nome}">${b.nome}</option>`).join("")}
function atualizarSelectServicos(){servicoSelect.innerHTML=servicos.map(s=>`<option value="${s.id}">${s.nome}</option>`).join("");atualizarValor()}
function atualizarValor(){const s=servicos.find(x=>x.id==servicoSelect.value);valorAtendimento.value=s?s.valor:0}
function registrarAtendimento(){const s=servicos.find(x=>x.id==servicoSelect.value);atendimentos.push({data:data.value,barbeiro:barbeiroSelect.value,servico:s.nome,valor:s.valor});localStorage.setItem("atendimentos",JSON.stringify(atendimentos));alert("Atendimento registrado ✔️")}
listarBarbeiros();atualizarSelectServicos();