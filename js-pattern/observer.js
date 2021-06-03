//observer

function ObseverList(){
  this.observerList = [];

}
ObseverList.prototype.add = function(obj){
  return this.observerList.push(obj)
}

ObseverList.prototype.count = function(){
  return this.observerList.length
}

ObseverList.prototype.get = function(index){
  if(index > -1 && index< this.observerList.length){
    return this.observerList[index]
  }
}

ObseverList.prototype.indexOf = function(obj, startIndex){
  var i = startIndex;

  while(i< this.observerList.length){
    if(this.observerList[i]=== obj){
      return i;
    }
    i++
  }
  return -1;
}

ObseverList.prototype.removeAt = function(index){
  this.observerList.splice(index,1)
}

function Subject(){
  this.observers = new ObseverList()
}
Subject.prototype.addObserver = function(observer){
  this.observers.add(observer)
}

Subject.prototype.removeObserver = function(observer){
  this.observers.removeAt(this.observers.indexOf(observer, 0))
}

Subject.prototype.notify = function(context){
  var observerCount = this.observers.count();
  for(var i=0; i<observerCount; i++){
    this.observers.get(i).update(context)
  }
}

/* <button id="addNewObserver"> Add new observer checkbox</button>
<input id="mainCheckbox" type = "checkbox"/>
<div id="observersContainer"></div> */

function extend(obj, extension){
  for(var key in extension){
    obj[key]=extension[key]
  }
}
extend(controlCheckBox, new Subject())

controlCheckBox.onclick = function(){
  controlCheckBox.notify(controlCheckBox.cheked)
}

addBtn.onclick = function(){
  var check = document.createElement('input')
  check.type = 'chekbox'

  extend(check, new Obsever())

  check.update = function(value){
    this.checked = value;
  }

  controlCheckBox.addObserver(check)
  document.appendChild(check)
}