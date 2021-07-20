const generate = (parent,trgt)=>{
	return trgt[Math.floor(Math.random()*3)].offsetTop - parent;
}

const rotate = async (ctr,targ)=>{

	if(ctr<5){
		targ.forEach(elem =>{
			elem.scrollTop = generate(elem.offsetTop,elem.children);
		})
		setTimeout(()=>rotate(ctr+1,targ),500);
	}else{
		return true
	}
}

const spin = (status)=>{

	let targ = document.querySelectorAll('.spin');

	if(status){
		targ.forEach(elem =>{
			elem.scrollTop = elem.children[2].offsetTop - elem.offsetTop;
		})

	}else{
		rotate(0,targ)
		targ.forEach(elem =>{
			let element = elem.scrollTop;
			element = generate(elem.offsetTop,elem.children)
		})		
	}

}

export default spin;