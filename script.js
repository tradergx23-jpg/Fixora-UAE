function estimate(){
  const d=document.getElementById('device').value, r=document.getElementById('repair').value;
  document.getElementById('result').textContent = d+' — '+r+': price confirmed after free diagnosis. No charge for diagnosis.';
}
function bookRepair(e){
  e.preventDefault();
  document.getElementById('booked').textContent='Thanks '+document.getElementById('name').value+' — we will confirm your free diagnosis on WhatsApp. Or call +971 55 888 0314.';
  return false;
}
