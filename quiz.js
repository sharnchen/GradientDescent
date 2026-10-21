
(function () {
'use strict';
const QUESTIONS = [{"id":1,"category":"梯度下降概念","question":"梯度下降的主要目標是什麼？","options":["使每層輸出都為0","降低損失函數","增加模型參數量","讓梯度永遠等於1"],"answer":1,"explanation":"沿負梯度方向更新參數，期望降低損失。"},{"id":2,"category":"梯度下降概念","question":"梯度下降更新式中的 η 代表什麼？","options":["輸入維度","批次大小","學習率","損失值"],"answer":2,"explanation":"η 控制每次參數更新的步長。"},{"id":3,"category":"梯度下降概念","question":"當某權重的損失梯度為正且學習率為正時，梯度下降通常如何更新該權重？","options":["增大權重","保持權重必定不變","直接設成1","減小權重"],"answer":3,"explanation":"更新式 w_new=w_old−ηg，正梯度使權重減小。"},{"id":4,"category":"梯度下降概念","question":"當梯度為負時，標準梯度下降對該權重的更新方向為何？","options":["增大權重","減小權重","清除權重","固定成零"],"answer":0,"explanation":"減去負數等同加上一個正量。"},{"id":5,"category":"梯度下降概念","question":"學習率過大，最可能產生何種問題？","options":["不需反向傳播","越過最低點甚至發散","模型必定更準確","梯度自動消失"],"answer":1,"explanation":"更新過大可能在最小值兩側振盪或發散。"},{"id":6,"category":"梯度下降概念","question":"學習率過小通常造成什麼現象？","options":["模型立即達到最優","導數無法定義","收斂速度慢","一定梯度爆炸"],"answer":2,"explanation":"每次更新很小，因此需要更多次迭代。"},{"id":7,"category":"梯度下降概念","question":"梯度是損失對哪一類量的變化率？","options":["資料筆數","訓練時間","GPU記憶體","可訓練參數"],"answer":3,"explanation":"梯度通常是損失對權重與偏置的偏導數。"},{"id":8,"category":"梯度下降概念","question":"梯度接近0能否單獨證明已達全域最小值？","options":["不能","一定能","只有Sigmoid能","只有CNN能"],"answer":0,"explanation":"梯度小也可能來自鞍點、平坦區或飽和。"},{"id":9,"category":"梯度下降概念","question":"SGD與批次梯度下降的主要差異之一為何？","options":["權重只能取整數","每次估算梯度所用的樣本量","激活函數必須不同","不需要損失函數"],"answer":1,"explanation":"SGD通常採用單樣本或小批次估算梯度。"},{"id":10,"category":"梯度下降概念","question":"反向傳播在訓練流程中的主要工作是什麼？","options":["繪製訓練資料","儲存模型圖片","計算損失對參數的梯度","直接決定資料標籤"],"answer":2,"explanation":"反向傳播使用鏈式法則計算梯度，最佳化器再更新參數。"},{"id":11,"category":"五次手算","question":"本教材範例中 x=2、w=3、b=0 時，預測值為多少？","options":["3","9","12","6"],"answer":3,"explanation":"y_hat=wx=3×2=6。"},{"id":12,"category":"五次手算","question":"本教材範例中 w=0 時，預測值是多少？","options":["0","2","5","10"],"answer":0,"explanation":"y_hat=2w，w=0 所以預測為0。"},{"id":13,"category":"五次手算","question":"教材的損失函數 L(w)=0.5(2w−10)^2，在 w=0 時是多少？","options":["25","50","100","10"],"answer":1,"explanation":"L(0)=0.5×100=50。"},{"id":14,"category":"五次手算","question":"教材的梯度 dL/dw 等於多少？","options":["w−5","8w−20","4w−20","2w−10"],"answer":2,"explanation":"對0.5(2w−10)^2用鏈式法則得到4w−20。"},{"id":15,"category":"五次手算","question":"當 w=0 時，本教材的梯度是多少？","options":["−10","0","20","−20"],"answer":3,"explanation":"g=4×0−20=−20。"},{"id":16,"category":"五次手算","question":"從 w=0、η=0.1 更新一次後，w 變成多少？","options":["2","1","0.2","5"],"answer":0,"explanation":"w1=0−0.1×(−20)=2。"},{"id":17,"category":"五次手算","question":"當 w=2 時，損失 L 為多少？","options":["50","18","6","36"],"answer":1,"explanation":"y_hat=4，L=0.5×(4−10)^2=18。"},{"id":18,"category":"五次手算","question":"當 w=2 時，梯度是多少？","options":["12","−20","−12","−6"],"answer":2,"explanation":"g=4×2−20=−12。"},{"id":19,"category":"五次手算","question":"從 w=2、η=0.1 更新後，w2 是多少？","options":["2.12","4","5.2","3.2"],"answer":3,"explanation":"w2=2−0.1×(−12)=3.2。"},{"id":20,"category":"五次手算","question":"第三次更新完成後，權重 w3 為多少？","options":["3.92","3.2","4.352","4.6112"],"answer":0,"explanation":"w3=3.2−0.1×(−7.2)=3.92。"},{"id":21,"category":"五次手算","question":"第四次更新完成後，權重 w4 為多少？","options":["5","4.352","3.92","4.6112"],"answer":1,"explanation":"w4=3.92−0.1×(−4.32)=4.352。"},{"id":22,"category":"五次手算","question":"第五次更新完成後，權重 w5 為多少？","options":["4.8","5.12","4.6112","4.352"],"answer":2,"explanation":"w5=4.352−0.1×(−2.592)=4.6112。"},{"id":23,"category":"五次手算","question":"第五次更新後的預測值是多少？","options":["8.704","10","9.6112","9.2224"],"answer":3,"explanation":"y_hat=2×4.6112=9.2224。"},{"id":24,"category":"五次手算","question":"第五次更新後的損失約是多少？","options":["0.30233","0.839808","2.3328","0"],"answer":0,"explanation":"L=0.5×(9.2224−10)^2≈0.30233。"},{"id":25,"category":"五次手算","question":"本教材範例的理想權重是多少？","options":["0.5","5","2","10"],"answer":1,"explanation":"2w=10 時 w=5，且損失為0。"},{"id":26,"category":"鏈式法則與梯度消失","question":"鏈式法則為什麼與梯度消失有關？","options":["只在輸入端微分","損失會自動歸零","跨層梯度需連乘多個導數","所有導數必定等於1"],"answer":2,"explanation":"多個小於1的倍率持續相乘可能使梯度迅速縮小。"},{"id":27,"category":"鏈式法則與梯度消失","question":"在簡化模型中每層梯度倍率0.25，連乘兩層後為多少？","options":["0.5","0.25","0.125","0.0625"],"answer":3,"explanation":"0.25^2=0.0625。"},{"id":28,"category":"鏈式法則與梯度消失","question":"在簡化模型中0.25連乘4次約為多少？","options":["0.00390625","0.015625","0.25","0.0625"],"answer":0,"explanation":"0.25^4=1/256=0.00390625。"},{"id":29,"category":"鏈式法則與梯度消失","question":"在簡化模型中0.5連乘10層約為多少？","options":["0.0097656","0.00097656","0.5","0.05"],"answer":1,"explanation":"0.5^10=1/1024≈0.00097656。"},{"id":30,"category":"鏈式法則與梯度消失","question":"梯度消失時，通常哪部分的權重較難有效更新？","options":["只有偏置項","只有最後一筆資料","靠近輸入端的早期層","只有輸出層"],"answer":2,"explanation":"反向梯度從輸出端往前傳，前面層可能受到更多衰減。"},{"id":31,"category":"鏈式法則與梯度消失","question":"梯度消失與正常接近最小值時梯度變小，最大的區別是什麼？","options":["兩者完全相同","前者必定代表訓練成功","後者只發生在RNN","成因不同：跨層衰減與接近駐點"],"answer":3,"explanation":"梯度消失由反向訊號跨層衰減引起，接近最小值可能自然使梯度變小。"},{"id":32,"category":"鏈式法則與梯度消失","question":"若每層反向倍率為1且忽略其他因素，十層後梯度倍率是多少？","options":["1","10","0.1","0"],"answer":0,"explanation":"1的任何次方仍為1。"},{"id":33,"category":"鏈式法則與梯度消失","question":"若每層倍率為1.5，連續多層後較可能產生什麼？","options":["停止前向傳播","梯度爆炸","梯度消失必然發生","Loss必定為0"],"answer":1,"explanation":"大於1的倍率反覆相乘使梯度放大。"},{"id":34,"category":"鏈式法則與梯度消失","question":"反向傳播經過一層 y=f(wx+b)，對上一層輸入的局部梯度含有哪些因素？","options":["只含批次大小","只含模型名稱","權重w與激活函數導數f′","只含偏置b"],"answer":2,"explanation":"dy/dx=w f′(wx+b)。"},{"id":35,"category":"鏈式法則與梯度消失","question":"梯度消失會讓哪種任務的長期依賴學習特別困難？","options":["單一加法運算","檔案壓縮","影像顯示","傳統RNN的長序列任務"],"answer":3,"explanation":"長時間反向傳播需連乘許多時間步的梯度。"},{"id":36,"category":"激活函數","question":"Sigmoid在 z=0 時的輸出值為多少？","options":["0.5","0","1","−1"],"answer":0,"explanation":"σ(0)=1/(1+1)=0.5。"},{"id":37,"category":"激活函數","question":"Sigmoid導數最大值是多少？","options":["2","0.25","1","0.5"],"answer":1,"explanation":"σ′=σ(1−σ)，於σ=0.5取得最大值0.25。"},{"id":38,"category":"激活函數","question":"當Sigmoid輸入非常大時，其導數趨近什麼？","options":["無限大","−1","0","1"],"answer":2,"explanation":"Sigmoid進入正向飽和區，導數接近0。"},{"id":39,"category":"激活函數","question":"Tanh在 z=0 時的導數為多少？","options":["0.25","0","−1","1"],"answer":3,"explanation":"tanh′(0)=1−tanh²(0)=1。"},{"id":40,"category":"激活函數","question":"ReLU在 z=3 時的導數為多少？","options":["1","0","3","0.25"],"answer":0,"explanation":"ReLU在正半軸為恆等函數，導數為1。"},{"id":41,"category":"激活函數","question":"ReLU在 z=−3 時的導數為多少？","options":["0.5","0","1","−1"],"answer":1,"explanation":"ReLU負半軸輸出固定0，因此導數為0。"},{"id":42,"category":"激活函數","question":"Dying ReLU主要與哪個現象有關？","options":["學習率必定為零","輸出一定負無限大","神經元長期落在負輸入區導致零梯度","每層導數都為1"],"answer":2,"explanation":"ReLU負區域導數為0，可能讓部分神經元不再更新。"},{"id":43,"category":"激活函數","question":"Linear激活函數 f(z)=z 的導數是多少？","options":["0","z²","0.25","1"],"answer":3,"explanation":"恆等函數的導數是1。"},{"id":44,"category":"激活函數","question":"若深層網路每層都只用Linear激活函數，主要限制為何？","options":["多層仍可合併成單一線性變換","一定產生梯度爆炸","永遠比ReLU準確","無法計算輸出"],"answer":0,"explanation":"線性層的複合仍為仿射變換，無法提供額外非線性。"},{"id":45,"category":"激活函數","question":"Softplus 的導數等於哪個函數？","options":["Linear","Sigmoid","Tanh","ReLU"],"answer":1,"explanation":"d/dz ln(1+e^z)=1/(1+e^(−z))。"},{"id":46,"category":"激活函數","question":"Leaky ReLU相較ReLU的重要特性為何？","options":["只能輸出0或1","完全沒有參數","負半軸仍保留小的非零斜率","正半軸導數永遠為0"],"answer":2,"explanation":"Leaky ReLU在負半軸通常保留如0.01的斜率。"},{"id":47,"category":"激活函數","question":"GELU常見於哪類現代模型？","options":["只用於資料庫","只用於排序演算法","只用於影像檔壓縮","Transformer"],"answer":3,"explanation":"GELU廣泛應用於Transformer等神經網路。"},{"id":48,"category":"訓練改進","question":"ResNet的殘差連接可寫成哪個式子？","options":["y=F(x)+x","y=F(x)×0","y=x−x","y=F(x)/0"],"answer":0,"explanation":"殘差捷徑提供訊號及梯度的額外傳遞路徑。"},{"id":49,"category":"訓練改進","question":"哪種初始化常配合ReLU使用？","options":["僅使用隨機整數","He/Kaiming初始化","固定所有權重為0","將每層權重設為無限大"],"answer":1,"explanation":"He初始化考量ReLU等激活函數的訊號尺度。"},{"id":50,"category":"訓練改進","question":"哪種措施常用於抑制梯度爆炸？","options":["強迫Sigmoid導數為0","移除損失函數","梯度裁剪","增加網路層數到無限"],"answer":2,"explanation":"Gradient clipping限制梯度範數或幅度，以降低更新過大風險。"}];
const root=document.getElementById('quiz-list'), filter=document.getElementById('quiz-filter');
if(!root)return;
let answers={}, submitted=false;
const cats=[...new Set(QUESTIONS.map(q=>q.category))];
for(const cat of cats){const opt=document.createElement('option');opt.value=cat;opt.textContent=cat;filter.appendChild(opt);}
function render(){
 root.innerHTML='';
 for(const q of QUESTIONS){
  const card=document.createElement('article');card.className='quiz-question';
  card.dataset.category=q.category;card.dataset.qid=q.id;
  const title=document.createElement('h3');title.textContent=`第 ${q.id} 題｜${q.category}｜${q.question}`;card.appendChild(title);
  for(let n=0;n<4;n++){
   const label=document.createElement('label');label.className='quiz-choice';
   const radio=document.createElement('input');radio.type='radio';radio.name='quiz_'+q.id;radio.value=n;
   radio.checked=answers[q.id]===n;radio.disabled=submitted;
   radio.addEventListener('change',()=>{answers[q.id]=n;updateProgress()});
   label.append(radio,document.createTextNode(' '+String.fromCharCode(65+n)+'. '+q.options[n]));
   if(submitted&&n===q.answer)label.classList.add('quiz-correct');
   if(submitted&&answers[q.id]===n&&n!==q.answer)label.classList.add('quiz-wrong');
   card.appendChild(label);
  }
  if(submitted){
   const explanation=document.createElement('div');explanation.className='quiz-explanation';
   const ok=answers[q.id]===q.answer;
   explanation.textContent=(ok?'✓ 正確。':'✗ '+(answers[q.id]===undefined?'未作答。':'答錯。')+'正確答案：'+String.fromCharCode(65+q.answer)+'。')+' '+q.explanation;
   card.appendChild(explanation);
  }
  root.appendChild(card);
 }
 updateFilter();
 updateProgress();
}
function updateFilter(){
 const val=filter.value;
 for(const card of root.children)card.hidden=val!=='all'&&val!==card.dataset.category;
}
function updateProgress(){
 const count=Object.keys(answers).length;
 document.getElementById('quiz-progress').textContent=`已作答 ${count} / ${QUESTIONS.length} 題`+(submitted?'（已交卷）':'');
 document.getElementById('quiz-bar').style.width=(count/QUESTIONS.length*100)+'%';
}
function submit(){
 submitted=true;
 const correct=QUESTIONS.filter(q=>answers[q.id]===q.answer).length;
 const score=correct*2;
 const box=document.getElementById('quiz-score');
 box.hidden=false;box.innerHTML=`<strong>測驗得分：${score} / 100</strong>（答對 ${correct} 題、答錯或未作答 ${50-correct} 題）。<br>下方顯示每題正確答案與解析。`;
 if(typeof window.reportQuizScore==='function')window.reportQuizScore(score,score>=60);
 render();
 box.scrollIntoView({behavior:'smooth',block:'center'});
}
function reset(){
 answers={};submitted=false;document.getElementById('quiz-score').hidden=true;
 if(typeof window.reportQuizScore==='function')window.reportQuizScore(null,false);
 render();
}
filter.addEventListener('change',updateFilter);
document.getElementById('quiz-submit').addEventListener('click',submit);
document.getElementById('quiz-submit-bottom').addEventListener('click',submit);
document.getElementById('quiz-reset').addEventListener('click',reset);
document.getElementById('quiz-reset-bottom').addEventListener('click',reset);
render();
})();
