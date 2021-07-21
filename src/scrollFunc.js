const generate = ()=>{
	return Math.floor(Math.random()*3)+1;//returns specific child node
}

const find = (list,cnt)=>{
	let ret;
	
	switch (cnt) {
		case 0:
			ret = "money"
			break;
		case 1:
			ret = "bar"
			break;
		case 2:
			ret = "lemon"
			break;
		case 3:
			ret = "cherry"
			break;						
		default:
			console.log("Error")
			break;
	}

	list.forEach((elem,ndx) => {
		if(elem.id === ret){
			ret = ndx;
		}
	});

	return list[ret];
}

const delayLoop = (par,child,stat,cnt)=>{
	let target = stat?find(child,cnt):child[generate()];

	target.style.visibility = 'hidden';
	par.removeChild(target);
	par.insertBefore(target,par.childNodes[0]);
	target.style.visibility = 'visible';	
}

const rotate = async (ctr,targ,count)=>{

	if(ctr<15){
		targ.forEach((elem,ndx) =>{//spin code
			setTimeout(()=>{
				delayLoop(elem,elem.childNodes,false)
			},ndx * 500)
		})
		setTimeout(()=>rotate(ctr+1,targ,count),250);
	}else{
		targ.forEach((elem,ndx) =>{//spin code
			setTimeout(()=>{
				delayLoop(elem,elem.childNodes,true,count)
			},ndx * 500)
		})
		return true
	}
}

const spin = (ctr,status)=>{

	let targ = document.querySelectorAll('.spin');

	if(status){
		rotate(10,targ,ctr)
	}else{
		rotate(0,targ,ctr)
	}

}

export default spin;

/*
  const spin = () => {
	let child = elem.childNodes[generate(elem.childNodes)]
	child.style.display = 'none'
	elem.removeChild(child)
	elem.insertBefore(child, elem.childNodes[0]);	
   	child.style.display = 'flex'
  };

  const rotate = (ctr) => {
    console.log(ctr);
    if (ctr < 20) {
      setTimeout(() => {
        spin();
        rotate(ctr + 1);
      }, 100);
    } else {
      return true;
    }
*/