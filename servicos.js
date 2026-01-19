function salvarServicos(){localStorage.setItem("servicos",JSON.stringify(servicos));listarServicos();atualizarSelectServicos()}
function adicionarServico(){if(!nomeServico.value||!valorServico.value)return;servicos.push({id:Date.now(),nome:nomeServico.value,valor:Number(valorServico.value)});nomeServico.value="";valorServico.value="";salvarServicos()}
function listarServicos(){listaServicos.innerHTML="";servicos.forEach(s=>{const li=document.createElement("li");li.innerHTML=`${s.nome} - R$ ${s.valor}<button onclick="editarServico(${s.id})">Editar</button>`;listaServicos.appendChild(li)})}
function editarServico(id){const s=servicos.find(x=>x.id===id);const novo=prompt("Novo valor:",s.valor);if(novo){s.valor=Number(novo);salvarServicos()}}
listarServicos();